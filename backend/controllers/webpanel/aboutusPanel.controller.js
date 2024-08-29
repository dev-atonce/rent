const About = require("../../services/webpanel/aboutusPanel.service");

const methods = {
  async onGetOne(req, res) {
    try {
      let result = await About.findOne(req, res);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdate(req, res) {
    try {
      const result = await About.update(req, res);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
