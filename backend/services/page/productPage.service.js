const Product = require("../../models/Product");
const config = require("../../configs/app");

const { ErrorNotFound } = require("../../configs/errorMethods");

const methods = {
  async find(req) {
    const limit = +(req.query.size || config.pageLimit);
    const offset = +(limit * ((req.query.page || 1) - 1));
    try {
      const rows = await Product.find({ status: true })
      .populate({
        path: "subCategory",
        select: "nameTH mainCategory",
        populate: {
          path: "mainCategory",
          select: "nameTH",
        },
      })
      .sort({ sort: "asc" });
      // .limit(limit)
      // .skip(offset);
      const count = await Product.countDocuments({ status: true });

      return {
        total: count,
        // lastPage: Math.ceil(count / limit),
        // currPage: +req.query.page || 1,
        rows: rows,
      };
    } catch (error) {
      return Promise.reject(ErrorNotFound(error.message));
    }
  },

  async findByUrl(url) {
    try {
      const obj = await Product.findOne({
        serviceUrl: url,
        status: true,
      })
      .populate("subCategory")
      .exec();
      if (!obj) return Promise.reject(ErrorNotFound("url: not found"));
      return obj;
    } catch (error) {
      return Promise.reject(ErrorNotFound("url: not found"));
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
};

module.exports = { ...methods };
