const AboutUs = require("../../models/AboutUs.js");
const {
  ErrorBadRequest,
  ErrorNotFound,
} = require("../../configs/errorMethods");

const methods = {
  async findOne(req, res) {
    try {
      const obj = await AboutUs.findOne({ type: req.query.type });
      return obj;
    } catch (error) {
      return Promise.reject(ErrorNotFound(error.message));
    }
  },

  async update(req, res) {
    try {
      const obj = await AboutUs.findOne({ type: req.body.type });
      if (!obj) {
        const data = req.body;
        const obj = new AboutUs(data);
        const inserted = await obj.save();
        return inserted;
      } else {
        const data = req.body;
        await AboutUs.updateOne({ _id: obj._id }, data, {
          runValidators: true,
          new: true,
        });
        return Object.assign(obj, data);
      }
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },

  async updateAll(req, res) {
    try {
      let newData = [];
      const data = req.body;
      for (let index = 0; index < Object.keys(data).length; index++) {
        const obj = await AboutUs.findOne({ type: data[index].type });
        if (!obj) {
          const rows = data[index];
          const obj = new AboutUs(rows);
          const inserted = await obj.save();
          newData = [...newData, inserted];
        } else {
          const rows = data[index];
          const inserted = await AboutUs.findOneAndUpdate({ _id: data[index].id }, rows, { new: true });
          newData = [...newData, inserted];
        }
      }
      return newData;
    } catch (error) {
      return Promise.reject(ErrorBadRequest(error.message));
    }
  },
};

module.exports = { ...methods };
