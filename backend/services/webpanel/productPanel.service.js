const Product = require("../../models/Product");
const config = require("../../configs/app");
const fs = require("fs");
const {
    ErrorBadRequest,
    ErrorNotFound,
} = require("../../configs/errorMethods");

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../public/uploads/products");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const methods = {
    async findAll(req) {
        const limit = +(req.query.size || config.pageLimit);
        const offset = +(limit * ((req.query.page || 1) - 1));
        try {
            const rows = await Product.find()
                .populate({
                    path: "subCategory",
                    select: "nameTH mainCategory",
                    populate: {
                        path: "mainCategory",
                        select: "nameTH",
                    }
                })
                .sort({ sort: "asc" })
                .limit(limit)
                .skip(offset);
            const count = await Product.countDocuments();
            return {
                total: count,
                lastPage: Math.ceil(count / limit),
                currPage: +req.query.page || 1,
                rows: rows,
            };
        } catch (error) {
            return Promise.reject(ErrorNotFound(error.message));
        }
    },

    async findById(id) {
        try {
            const obj = await Product.findById(id)
            .populate({
                path: "subCategory",
                select: "nameTH mainCategory",
                populate: {
                    path: "mainCategory",
                    select: "nameTH",
                }
            });
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            return obj;
        } catch (error) {
            return Promise.reject(ErrorNotFound("id: not found"));
        }
    },

    async insert(req, res) {
        return new Promise((resolve, reject) => {
            const upload = multer({
                storage: storage,
                limits: { fileSize: config.limitFileSize },
            }).single("image");
            upload(req, res, async (err) => {
                if (err) {
                    return reject(ErrorBadRequest(err));
                } else {
                    try {
                        const data = req.body;
                        data.image = req.files?.path;
                        const obj = new Product(data);
                        const inserted = await obj.save();
                        resolve(inserted);
                    } catch (error) {
                        return reject(ErrorBadRequest(error.message));
                    }
                }
            });
        });
    },

    async update(req, res) {
        return new Promise((resolve, reject) => {
            const upload = multer({
                storage: storage,
                limits: { fileSize: config.limitFileSize },
            }).single("image");
            upload(req, res, async (err) => {
                if (err) {
                    return reject(ErrorBadRequest(err));
                } else {
                    try {
                        const data = req.body;
                        const obj = await Product.findById(req.params.id);
                        if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
                        if (req.files) {
                            fs?.unlink("../public/uploads/products/" + obj.image, (err) => {
                                if (err) {
                                    return Promise.reject(ErrorNotFound(err));
                                }
                            });
                            data.image = req.files?.path;
                        }
                        await Product.updateOne({ _id: req.params.id }, data, {
                            runValidators: true,
                            new: true,
                        });
                        resolve(Object.assign(obj, data));
                    } catch (error) {
                        return reject(ErrorBadRequest(error.message));
                    }
                }
            });
        });
    },

    async delete(id) {
        try {
            const obj = await Product.findOneAndDelete({ _id: id }).exec();
            if (obj?.image) {
                fs?.unlink("../public/uploads/products/" + obj.image, (err) => {
                    if (err) {
                        return Promise.reject(ErrorNotFound(err));
                    }
                });
            }
            if (obj.gallery?.length) {
                obj.gallery.map((item) => {
                    fs?.unlink("../public/uploads/products/" + item, (err) => {
                        if (err) {
                            return Promise.reject(ErrorNotFound(err));
                        }
                    });
                });
            }
            return { msg: "deleted success" };
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async insertGallery(req, res) {
        return new Promise(async (resolve, reject) => {
            try {
                const obj = await Product.findById(req.params.id).exec();
                if (!obj) return reject(ErrorNotFound("id: not found"));
                if (obj.gallery?.length >= 3) return reject(ErrorBadRequest("Gallery is full"));
                const galleryLeft = 3 - obj.gallery.length;

                const upload = multer({
                    storage: storage,
                    limits: { fileSize: config.limitFileSize },
                }).array("gallery", galleryLeft);

                upload(req, res, async (err) => {
                    if (err?.code === "LIMIT_UNEXPECTED_FILE") {
                        return reject(ErrorBadRequest(`You can upload ${galleryLeft} picture to the gallery`));
                    }
                    if (err) {
                        return reject(ErrorBadRequest(err));
                    }
                    if (!req.files || req.files.length === 0) {
                        return reject(ErrorBadRequest("Image is required"));
                    }
                    try {
                        req.files.map((file) => {
                            obj.gallery.push(file.filename);
                        });
                        await Product.updateOne({ _id: req.params.id }, { gallery: obj.gallery });
                        resolve(Object.assign(obj, { gallery: obj.gallery }));
                    } catch (error) {
                        return reject(ErrorBadRequest(error.message));
                    }
                });
            } catch (error) {
                return reject(ErrorBadRequest(error.message));
            }
        });
    },

    async deleteGallery(id, position) {
        try {
            const obj = await Product.findById({ _id: id }).exec();
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            if (obj.gallery[position]) {
                fs?.unlink("../public/uploads/products/" + obj.gallery[position], (err) => {
                    if (err) {
                        return Promise.reject(ErrorNotFound(err));
                    }
                });
                obj.gallery.splice(position, 1);
            }
            await Product.updateOne({ _id: id }, obj);
            return { msg: "deleted success" };
        } catch (error) {
            return reject(ErrorBadRequest(error.message));
        }
    }
};

module.exports = { ...methods };
