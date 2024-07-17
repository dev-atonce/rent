const mongoose = require("mongoose");
const Product = require("../../models/Product");
const config = require("../../configs/app");
const fs = require("fs/promises");
const multer = require("multer");
const { ensureDirectoryExistence } = require("../../helpers/checkDirectory.helper");
const { ErrorBadRequest, ErrorNotFound } = require("../../configs/errorMethods");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "./public/image/product";
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
  { name: "gallery", maxCount: 6 },
]);

const methods = {
  scopeSearch(req) {
    $and = [];
    if (req.query.category && req.query.category !== "all")
      $and.push({ 'subCategory.mainCategory': new mongoose.Types.ObjectId(req.query.category) });
    if (req.query.status && req.query.status !== "all")
      $and.push({ status: req.query.status === "true" ? true : false });
    if (req.query.keyword)
      $and.push({ productNameTH: { $regex: req.query.keyword, $options: 'i' } });
    const query = $and.length > 0 ? { $and } : {};
    return { query: query };
  },

  async findAll(req) {
    const limit = +(req.query.size || 50);
    const offset = +(limit * ((req.query.page || 1) - 1));
    const _q = this.scopeSearch(req);
    try {
      const rows = await Product.aggregate([
        {
          $lookup: {
            from: "categorysubs", 
            localField: "subCategory",
            foreignField: "_id",
            as: "subCategory",
          },
        },
        { $unwind: "$subCategory" }, // Deconstruct the joined array
        {
          $lookup: {
            from: "categorymains", 
            localField: "subCategory.mainCategory",
            foreignField: "_id",
            as: "mainCategory",
          },
        },
        { $unwind: "$mainCategory" }, // Deconstruct the joined array
        {
          $match: _q.query,
        },
        { $sort: { sort: 1 } },
        { $skip: offset },
        { $limit: limit },
      ]);

      const count = await Product.aggregate([
        {
          $lookup: {
            from: "categorysubs",
            localField: "subCategory",
            foreignField: "_id",
            as: "subCategory",
          },
        },
        { $unwind: "$subCategory" }, // Deconstruct the joined array
        {
          $match: _q.query,
        },
      ]);

      return {
        total: count.length > 0 ? count.length : 0,
        lastPage: Math.ceil(count.length / limit),
        currPage: +req.query.page || 1,
        rows: rows,
      };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async findById(id) {
    try {
      const obj = await Product.findById(id).populate({
        path: "subCategory",
        select: "nameTH mainCategory",
        populate: {
          path: "mainCategory",
          select: "nameTH",
        },
      });
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
            if (req.files?.gallery) {
              data.gallery = [];
              req.files?.gallery.map((file) => {
                data.gallery.push(file.path);
              });
            }
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
    return new Promise(async (resolve, reject) => {
      try {
        upload(req, res, async (err) => {
          if (err) {
            return reject(ErrorBadRequest(err));
          } else {
            try {
              const data = req.body;
              const obj = await Product.findById(req.params.id).exec();
              if (!obj) return reject(ErrorNotFound("id: not found"));
              if (req.files?.image) {
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
              if (req.files?.gallery) {
                if (obj.gallery?.length >= 12)
                  return reject(ErrorBadRequest("Gallery is full"));
                const galleryLeft = 12 - obj.gallery.length;
                if (galleryLeft < req.files.gallery.length)
                  return reject(
                    ErrorBadRequest(
                      `You can upload ${galleryLeft} picture to the gallery`
                    )
                  );
                if (obj.gallery.length > 0) {
                  data.gallery = obj.gallery;
                  req.files?.gallery.map((file) => {
                    data.gallery = [...data.gallery, file.path];
                  });
                } else {
                  data.gallery = [];
                  req.files?.gallery.map((file) => {
                    data.gallery = [...data.gallery, file.path];
                  });
                }
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
      } catch (error) {
        return reject(ErrorBadRequest(error.message));
      }
    });
  },

  async delete(id) {
    try {
      const obj = await Product.findOneAndDelete({ _id: id }).exec();
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      if (obj?.image) {
        try {
          await fs.unlink(obj.image);
        } catch (error) {
          if (error.code !== "ENOENT") {
            throw error;
          }
        }
      }
      if (obj?.gallery) {
        obj.gallery.map(async (item) => {
          try {
            await fs.unlink(item);
          } catch (error) {
            if (error.code !== "ENOENT") {
              throw error;
            }
          }
        });
      }
      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async deleteGallery(id, position) {
    try {
      const obj = await Product.findById({ _id: id }).exec();
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      if (obj.gallery[position]) {
        try {
          await fs.unlink(obj.gallery[position]);
        } catch (err) {
          if (err.code !== "ENOENT") {
            throw err;
          }
        }
        obj.gallery.splice(position, 1);
      } else {
        return Promise.reject(ErrorNotFound("Image not found in gallery"));
      }
      await Product.updateOne({ _id: id }, { gallery: obj.gallery });
      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
