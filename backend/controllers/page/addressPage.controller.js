const Address = require("../../services/page/addressPage.service");

const methods = {
  async onGetAll(req, res) {
    try {
      let result = await Address.find(req);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetById(req, res) {
    try {
      let result = await Address.findById(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
