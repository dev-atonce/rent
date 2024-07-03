const Project = require("../../models/Project");
const config = require("../../configs/app");
const fs = require("fs");
const {
  ErrorBadRequest,
  ErrorNotFound,
} = require("../../configs/errorMethods");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/uploads/project");
  },
  filename: function (req, file, cb) {
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
  async findAll(req) {
    const limit = +(req.query.size || config.pageLimit);
    const offset = +(limit * ((req.query.page || 1) - 1));
    try {
      const rows = await Project.find()
        .sort({ sort: "asc" })
        .limit(limit)
        .skip(offset);
      const count = await Project.countDocuments();
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
      const obj = await Project.findById(id);
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
            const checkDup = await Project.findOne({
              projectUrl: req.body.projectUrl,
            });
            // if (checkDup)
            //   return reject(ErrorBadRequest("URL is already exist"));
            const data = req.body;
            if (req.files?.image) {
              req.files?.image.map((file) => {
                data.image = file.filename;
              });
            }
            if (req.files?.gallery) {
              data.gallery = [];
              req.files?.gallery.map((file) => {
                data.gallery.push(file.filename);
              });
            }
            const obj = new Project(data);
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
              const checkDup = await Project.findOne({
                projectUrl: req.body.projectUrl,
              });
              // if (checkDup) return reject(ErrorBadRequest("URL is already exist"));
              const data = req.body;
              const obj = await Project.findById(req.params.id).exec();
              if (!obj) return reject(ErrorNotFound("id: not found"));
              if (req.files?.image) {
                if (obj.image) {
                  fs?.unlink(
                    "../public/uploads/project/" + obj.image,
                    (err) => {
                      if (err) {
                        return Promise.reject(ErrorNotFound(err));
                      }
                    }
                  );
                }
                req.files?.image.map((file) => {
                  data.image = file.filename;
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
                    data.gallery = [...data.gallery, file.filename];
                  });
                } else {
                  data.gallery = [];
                  req.files?.gallery.map((file) => {
                    data.gallery = [...data.gallery, file.filename];
                  });
                }
              }
              await Project.updateOne({ _id: req.params.id }, data, {
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
      const obj = await Project.findOneAndDelete({ _id: id }).exec();
      if (obj?.image) {
        fs.unlink("../public/uploads/project/" + obj.image, (err) => {
          if (err) {
            return Promise.reject(ErrorNotFound(err));
          }
        });
      }
      if (obj?.gallery) {
        obj.gallery.map((item) => {
          fs?.unlink("../public/uploads/project/" + item, (err) => {
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

  async deleteGallery(id, position) {
    try {
      const obj = await Project.findById({ _id: id }).exec();
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      if (obj.gallery[position]) {
        fs?.unlink(
          "../public/uploads/project/" + obj.gallery[position],
          (err) => {
            if (err) {
              return Promise.reject(ErrorNotFound(err));
            }
          }
        );
        obj.gallery.splice(position, 1);
      }
      await Project.updateOne({ _id: id }, obj);
      return { msg: "deleted success" };
    } catch (error) {
      return reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
