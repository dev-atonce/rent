const CategoryMain = require("../../models/CategoryMain.js");
const config = require("../../configs/app.js");
const fs = require("fs");
const {
  ErrorBadRequest,
  ErrorNotFound,
} = require("../../configs/errorMethods.js");
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
};

module.exports = { ...methods };
