const Product = require("../../services/page/productPage.service");

const methods = {
  async onGet(req, res) {
    try {
      let result = await Product.find(req);
      console.log(result);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetByUrl(req, res) {
    try {
      let result = await Product.findByUrl(req.params.url);
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
};

module.exports = { ...methods };
