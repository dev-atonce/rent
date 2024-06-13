const Project = require("../../models/Project");
const config = require("../../configs/app");

const { ErrorNotFound } = require("../../configs/errorMethods");

const methods = {
  async find(req) {
    const limit = +(req.query.size || config.pageLimit);
    const offset = +(limit * ((req.query.page || 1) - 1));
    try {
      const rows = await Project.find({ status: true })
        .sort({ sort: "asc" })
        .limit(limit)
        .skip(offset);
      const count = await Project.countDocuments({ status: true });
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

  async findByUrl(url) {
    try {
      const obj = await Project.findOne({
        ProjectUrl: url,
        status: true,
      }).exec();
      if (!obj) return Promise.reject(ErrorNotFound("url: not found"));
      return obj;
    } catch (error) {
      return Promise.reject(ErrorNotFound("url: not found"));
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
};

module.exports = { ...methods };
