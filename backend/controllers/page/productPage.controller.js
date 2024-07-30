const Product = require("../../services/page/productPage.service");

const methods = {
  async onGet(req, res) {
    try {
      let result = await Product.find(req);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetById(req, res) {
    try {
      let result = await Product.findById(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetBySubCategory(req, res) {
    try {
      let result = await Product.findBySubCategory(req);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
