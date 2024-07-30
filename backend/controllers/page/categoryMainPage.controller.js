const CategoryMain = require("../../services/page/categoryMainPage.service");

const methods = {
  async onGetAll(req, res) {
    try {
      let result = await CategoryMain.findAll(req);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetById(req, res) {
    try {
      let result = await CategoryMain.findById(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
