const Contact = require("../../models/Contact");
const config = require("../../configs/app");
const {
  ErrorBadRequest,
  ErrorNotFound,
} = require("../../configs/errorMethods");

const methods = {
  async find(req) {
    try {
      const rows = await Contact.find().exec(); // Populate the userId field with User document
      const count = await Contact.countDocuments();
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
      const obj = await Contact.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      return obj;
    } catch (error) {
      return Promise.reject(ErrorNotFound("id: not found"));
    }
  },

  async insert(req) {
    try {
      const obj = new Contact(req.body);
      const inserted = await obj.save();
      return inserted;
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async update(id, data) {
    try {
      const obj = await Contact.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      await Contact.updateOne({ _id: id }, data);
      return Object.assign(obj, data);
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async delete(id) {
    try {
      const obj = await Contact.findById(id);
      if (!obj) return Promise.reject(ErrorNotFound("id: not found"));
      await Contact.deleteOne({ _id: id });
      return { msg: "deleted success" };
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
