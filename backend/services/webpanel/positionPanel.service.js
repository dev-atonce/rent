const Position = require("../../models/Position");

const fs = require("fs/promises");
const multer = require("multer");

const config = require("../../configs/app");
const { ErrorBadRequest, ErrorNotFound, ErrorUnauthorized } = require("../../configs/errorMethods");
const {
  ensureDirectoryExistence,
} = require("../../helpers/checkDirectory.helper");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "./public/image/position";
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
}).fields([
  { name: "image", maxCount: 1 },
  { name: "gallery", maxCount: 12 },
]);

const methods = {
  scopeSearch(req) {
    $or = [];
    if (req.query.keyword) $or.push({ nameTH: { $regex: req.query.keyword } });
    if (req.query.status && req.query.status !== "all")
      $or.push({ status: req.query.status });
    const query = $or.length > 0 ? { $or } : {};
    return { query: query };
  },

  async findAll(req) {
    const limit = +(req.query.size || config.pageLimit);
    const offset = +(limit * ((req.query.page || 1) - 1));
    const _q = methods.scopeSearch(req);

    try {
      const rows = await Position.find(_q.query)
        .sort({ sort: "asc" })
        .limit(limit)
        .skip(offset);
      const count = await Position.countDocuments();
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
      const obj = await Position.findById(id);
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
            const data = req.body;
            if (req.files?.image) {
              req.files?.image.map((file) => {
                data.image = file.path;
              });
            }
            const obj = new Position(data);
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
    console.log("update position panel" , req.data);
    return new Promise(async (resolve, reject) => {
      try {
        console.log("req.files" , req.files);
        upload(req, res, async (err) => {
          if (err) {
            return reject(ErrorBadRequest(err));
          } else {
            try {
              const data = req.body;
              const obj = await Position.findById(req.params.id).exec();
              if (!obj) return reject(ErrorNotFound("id: not found"));
              if (req.files?.image) {
                console.log("position files" , req.files);
                if (obj?.image) {
                  try {
                    await fs.unlink(obj.image);
                  } catch (error) {
                    if (error.code !== "ENOENT") {
                      throw error;
                    }
                  }
                }
                req.files?.image.map((file) => {
                  data.image = file.path;
                });
              }
              await Position.updateOne({ _id: req.params.id }, data, {
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
      const obj = await Position.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      await Position.deleteOne({ _id: id });
      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
