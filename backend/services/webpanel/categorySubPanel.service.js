const CategorySub = require("../../models/CategorySub.js");
const config = require("../../configs/app");
const fs = require("fs");
const {
  ErrorBadRequest,
  ErrorNotFound,
} = require("../../configs/errorMethods");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/uploads/categorySub");
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
    try {
      const rows = await CategorySub.find()
        .populate({
          path: "mainCategory",
          select: "nameTH",
        })
        .sort({ sort: "asc" });
      const count = await CategorySub.countDocuments();
      return {
        total: count,
        rows: rows,
      };
    } catch (error) {
      return Promise.reject(ErrorNotFound(error.message));
    }
  },

  async findById(id) {
    try {
      const obj = await CategorySub.findById(id).populate({
        path: "mainCategory",
        select: "nameTH",
      });
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      return obj;
    } catch (error) {
      return Promise.reject(ErrorNotFound("id: not found"));
    }
  },

  async insert(req, res) {
    return new Promise((resolve, reject) => {
      upload(req, res, async (err) => {
        if (err) {
          return reject(ErrorBadRequest(err));
        } else {
          try {
            const data = req.body;
            data.image = req.file?.filename;
            const obj = new CategorySub(data);
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
      upload(req, res, async (err) => {
        if (err) {
          return reject(ErrorBadRequest(err));
        } else {
          try {
            const data = req.body;
            const obj = await CategorySub.findById(req.params.id);
            if (!obj) return reject(ErrorNotFound("id: not found"));
            if (req.file) {
              if (obj?.image) {
                fs?.unlink(
                  "../public/uploads/categorySub/" + obj.image,
                  (err) => {
                    if (err) {
                      return reject(ErrorNotFound(err));
                    }
                  }
                );
              }
              data.image = req.file?.filename;
            }
            await CategorySub.updateOne({ _id: req.params.id }, data, {
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
      const obj = await CategorySub.findOneAndDelete({ _id: id }).exec();
      if (obj?.image) {
        fs?.unlink("../public/uploads/categorySub/" + obj.image, (err) => {
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
