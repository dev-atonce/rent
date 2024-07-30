const CategorySub = require("../../services/page/categorySubPage.service");

const methods = {
  async onGetAll(req, res) {
    try {
      let result = await CategorySub.findAll(req);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetById(req, res) {
    try {
      let result = await CategorySub.findById(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
