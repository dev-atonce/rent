const Service = require("../../models/Project");
const config = require("../../configs/app");
const fs = require("fs");
const {
  ErrorBadRequest,
  ErrorNotFound,
} = require("../../configs/errorMethods");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/uploads/services");
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
      const rows = await Service.find()
        .sort({ sort: "asc" })
        .limit(limit)
        .skip(offset);
      const count = await Service.countDocuments();
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
      const obj = await Service.findById(id);
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
          if (!req.files) reject(ErrorBadRequest("Image is required"));
          try {
            const data = req.body;
            data.image = req.file.path;
            const obj = new Service(data);
            const inserted = await obj.save();
            resolve(inserted);
          } catch (error) {
            reject(ErrorBadRequest(error.message));
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
            const obj = await Service.findById(req.params.id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            if (req.files) {
              fs?.unlink("../public/uploads/services/" + obj.image, (err) => {
                if (err) {
                  return Promise.reject(ErrorNotFound(err));
                }
              });
              data.image = req.files?.path;
            }
            await Service.updateOne({ _id: req.params.id }, data, {
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
      const obj = await Service.findOneAndDelete({ _id: id }).exec();
      if (obj?.image) {
        fs.unlink("../public/uploads/services/" + obj.image, (err) => {
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
