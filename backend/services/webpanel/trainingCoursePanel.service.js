const TrainingCourse = require("../../models/TrainingCourse");
const config = require("../../configs/app");
const fs = require("fs");
const { ErrorBadRequest, ErrorNotFound } = require("../../configs/errorMethods");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../public/uploads/trainingCourse");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: config.limitFileSize },
}).single("image");

const methods = {
    async findAll(req) {
        const limit = +(req.query.size || config.pageLimit);
        const offset = +(limit * ((req.query.page || 1) - 1));
        try {
            const rows = await TrainingCourse.find()
                .sort({ sort: "asc" })
                .limit(limit)
                .skip(offset);
            const count = await TrainingCourse.countDocuments();
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
            const obj = await TrainingCourse.findById(id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            return obj;
        } catch (error) {
            return Promise.reject(ErrorNotFound("id: not found"));
        }
    },

    async insert(req, res) {
        return new Promise(async (resolve, reject) => {
            upload(req, res, async (err) => {
                if (err) {
                    return reject(ErrorBadRequest(err));
                } else {
                    try {
                        const checkDup = await TrainingCourse.findOne({ url: req.body.url });
                        if (checkDup) return reject(ErrorBadRequest("URL is already exist"));
                        const data = req.body;
                        if (req.file) {
                            data.image = req.file?.filename;
                        }
                        const obj = new TrainingCourse(data);
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
        return new Promise(async (resolve, reject) => {
            try {
                upload(req, res, async (err) => {
                    if (err) {
                        return reject(ErrorBadRequest(err));
                    } else {
                        try {
                            const checkDup = await TrainingCourse.findOne({ url: req.body.url });
                            if (checkDup) return reject(ErrorBadRequest("URL is already exist"));
                            const data = req.body;
                            const obj = await TrainingCourse.findById(req.params.id).exec();
                            if (!obj) return reject(ErrorNotFound("id: not found"));
                            if (req.file) {
                                if (obj.image) {
                                    fs?.unlink("../public/uploads/trainingCourse/" + obj.image, (err) => {
                                        if (err) { return Promise.reject(ErrorNotFound(err)); }
                                    }
                                    );
                                }
                                data.image = req.file?.filename;
                            }
                            await TrainingCourse.updateOne({ _id: req.params.id }, data, {
                                runValidators: true,
                                new: true,
                            });
                            resolve(Object.assign(obj, data));
                        } catch (error) {
                            return reject(ErrorBadRequest(error.message));
                        }
                    }
                });
            } catch (error) {
                return reject(ErrorBadRequest(error.message));
            }
        });
    },

    async delete(id) {
        try {
            const obj = await TrainingCourse.findOneAndDelete({ _id: id }).exec();
            if (obj?.image) {
                fs.unlink("../public/uploads/trainingCourse/" + obj.image, (err) => {
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
