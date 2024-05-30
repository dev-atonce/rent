const CategoryMain = require("../../models/CategoryMain.js");
const config = require("../../configs/app");
const fs = require("fs");
const {
  ErrorBadRequest,
  ErrorNotFound,
} = require("../../configs/errorMethods");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/uploads/categoryMain");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const methods = {
  async findAll(req) {
    // const limit = +(req.query.size || config.pageLimit);
    // const offset = +(limit * ((req.query.page || 1) - 1));
    try {
      const rows = await CategoryMain.find().sort({ sort: "asc" });
      // .limit(limit)
      // .skip(offset);
      const count = await CategoryMain.countDocuments();
      return {
        total: count,
        // lastPage: Math.ceil(count / limit),
        // currPage: +req.query.page || 1,
        rows: rows,
      };
    } catch (error) {
      Promise.reject(ErrorNotFound(error.message));
    }
  },

  async findById(id) {
    try {
      const obj = await CategoryMain.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      return obj;
    } catch (error) {
      Promise.reject(ErrorNotFound("id: not found"));
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
            data.image = req.files?.filename;
            const obj = new CategoryMain(data);
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
        // limits: { fileSize: config.limitFileSize },
      }).single("image");
      upload(req, res, async (err) => {
        if (err) {
          return reject(ErrorBadRequest(err));
        } else {
          try {
            const data = req.body;
            const obj = await CategoryMain.findById(req.params.id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            if (req.file) {
              if (obj?.image) {
                fs?.unlink(
                  "../public/uploads/categoryMain/" + obj.image,
                  (err) => {
                    if (err) {
                      return Promise.reject(ErrorNotFound(err));
                    }
                  }
                );
              }

              data.image = req.file?.filename;
            }

            await CategoryMain.updateOne({ _id: req.params.id }, data, {
              runValidators: true,
              new: true,
            });
            resolve(Object.assign(obj, data));
          } catch (error) {
            reject(ErrorBadRequest(error.message));
          }
        }
      });
    });
  },

  async delete(id) {
    try {
      const obj = await CategoryMain.findOneAndDelete({ _id: id }).exec();
      if (obj?.image) {
        fs?.unlink("../public/uploads/categoryMain/" + obj.image, (err) => {
          if (err) {
            return Promise.reject(ErrorNotFound(err));
          }
        });
      }
      return { msg: "deleted success" };
    } catch (error) {
      Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
