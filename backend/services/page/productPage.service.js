const Product = require("../../models/Product");

const { ErrorNotFound } = require("../../configs/errorMethods");

const methods = {
  async find(req) {
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
      const count = await Product.countDocuments({ status: true });

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

  async findBySubCategory(req) {
    try {
      const obj = await Product.find({
        subCategory: req.params.id,
        type: req.params.type,
        // status: true
      }).populate({
        path: "subCategory",
        select: "nameTH mainCategory",
        populate: {
          path: "mainCategory",
          select: "_id nameTH",
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
