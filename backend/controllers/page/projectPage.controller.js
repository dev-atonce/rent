const Project = require("../../services/page/projectPage.service");

const methods = {
  async onGet(req, res) {
    try {
      let result = await Project.find(req);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetByUrl(req, res) {
    try {
      let result = await Project.findByUrl(req.params.url);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetById(req, res) {
    try {
      let result = await Project.findById(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
