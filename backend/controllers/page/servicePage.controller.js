const Service = require("../../services/page/servicePage.service");

const methods = {
  async onGet(req, res) {
    try {
      let result = await Service.find(req);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetByUrl(req, res) {
    try {
      let result = await Service.findByUrl(req.params.url);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
