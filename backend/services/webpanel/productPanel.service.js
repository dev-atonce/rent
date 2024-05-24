const Product = require("../../models/Product");
const config = require("../../configs/app");
const fs = require("fs");
const { ErrorBadRequest, ErrorNotFound } = require("../../configs/errorMethods");

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
            const obj = await Product.findById(id);
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
                    reject(ErrorBadRequest(err));
                } else {
                    // if (!req.file) reject(ErrorBadRequest("Image is required"));
                    try {
                        const data = req.body;
                        // data.image = req.file.path;
                        const obj = new Product(data);
                        const inserted = await obj.save();
                        resolve(inserted);
                    } catch (error) {
                        reject(ErrorBadRequest(error.message));
                    }
                }
            });
        });
    },

    async insertGallery(req, res) {
        return new Promise((resolve, reject) => {
            const upload = multer({
                storage: storage,
                limits: { fileSize: config.limitFileSize },
            }).array("gallery", 3);
            upload(req, res, async (err) => {
                if (err) {
                    reject(ErrorBadRequest(err));
                } else {
                    // if (!req.file) reject(ErrorBadRequest("Image is required"));
                    try {
                        let gallery = [];
                        req.files?.map((file) => {
                            gallery.push(file.filename);
                        });
                        
                        // const data = req.body;
                        // data.image = req.file.path;
                        // const obj = new Product(data);
                        // const inserted = await obj.save();
                        // resolve(inserted);
                    } catch (error) {
                        reject(ErrorBadRequest(error.message));
                    }
                }
            });
        });
    },

    async update(id, data) {
        try {
            const obj = await Product.findById(id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            await Product.updateOne({ _id: id }, data, {
                runValidators: true,
                new: true,
            });
            return Object.assign(obj, data);
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },

    async delete(id) {
        try {
            const obj = await Product.findOneAndDelete({ _id: id }).exec();
            if (obj?.image) {
                fs.unlink("../public/uploads/products" + obj.image, (err) => {
                    if (err) {
                        return Promise.reject(ErrorNotFound(err));
                    }
                });
            }
            return { msg: "deleted success" };
        } catch (error) {
            return Promise.reject(ErrorBadRequest(error.message));
        }
    },
};

module.exports = { ...methods };
