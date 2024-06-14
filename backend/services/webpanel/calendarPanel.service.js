const Calendar = require("../../models/Calendar.js");
const {
  ErrorBadRequest,
  ErrorNotFound,
} = require("../../configs/errorMethods");

const methods = {
  async findAll(req) {
    try {
      const rows = await Calendar.find({
        trainingCourse: req.params.id,
      }).populate({
        path: "trainingCourse",
      });
      const count = await Calendar.countDocuments();
      return {
        total: count,
        rows: rows,
      };
    } catch (error) {
      return Promise.reject(ErrorNotFound(error.message));
    }
  },

  async insert(req) {
    try {
      const obj = new Calendar(req.body);
      const inserted = await obj.save();
      return inserted;
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async update(data, id) {
    try {
      const obj = await Calendar.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      await Calendar.updateOne({ _id: id }, data);
      return Object.assign(obj, data);
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async delete(id) {
    try {
      const obj = await Calendar.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      await Calendar.deleteOne({ _id: id });
      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
