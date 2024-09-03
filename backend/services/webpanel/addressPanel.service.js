const Address = require("../../models/Address");
const config = require("../../configs/app");
const fs = require("fs/promises");
const multer = require("multer");
const {
  ErrorBadRequest,
  ErrorNotFound,
} = require("../../configs/errorMethods");
const {
  ensureDirectoryExistence,
} = require("../../helpers/checkDirectory.helper");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "./public/image/address";
    ensureDirectoryExistence(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: config.limitFileSize },
}).single("image");

const methods = {
  async find(req) {
    try {
      const rows = await Address.find().sort({ sort: "asc" }).exec(); // Populate the userId field with User document
      const count = await Address.countDocuments();
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
      const obj = await Address.findById(id);
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
            data.image = req.file?.path;
            const obj = new Address(data);
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
            const obj = await Address.findById(req.params.id);
            if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
            if (req.file) {
              if (obj?.image) {
                try {
                  await fs.unlink(obj.image);
                } catch (error) {
                  if (error.code !== "ENOENT") {
                    throw error;
                  }
                }
              }
              data.image = req.file?.path;
            }
            await Address.updateOne({ _id: req.params.id }, data, {
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
      const obj = await Address.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      await Address.deleteOne({ _id: id });
      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
