const Youtube = require("../../models/Youtube.js");
const { ErrorBadRequest, ErrorNotFound } = require("../../configs/errorMethods");

const methods = {
  async findAll() {
    try {
      const rows = await Youtube.find().sort({ sort: "asc" });
      const count = await Youtube.countDocuments();
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
      const obj = await Youtube.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      return obj;
    } catch (error) {
      return Promise.reject(ErrorNotFound("id: not found"));
    }
  },

  async insert(req) {
    try {
      const obj = new Youtube(req.body);
      const inserted = await obj.save();
      return inserted;
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async update(req) {
    try {
      const obj = await Youtube.findById(req.params.id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      await Youtube.updateOne({ _id: req.params.id }, req.body);
      return Object.assign(obj, req.body);
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async delete(id) {
    try {
      const obj = await Youtube.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      await Youtube.deleteOne({ _id: id });
      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
