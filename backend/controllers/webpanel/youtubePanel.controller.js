const Youtube = require("../../services/webpanel/youtubePanel.service");
const { checkAllowFields } = require("../../helpers/field.helper");

const allowFields = {
  updateSort: ["sort"],
};

const methods = {
  async onGetAll(req, res) {
    try {
      let result = await Youtube.findAll(req, res);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetById(req, res) {
    try {
      let result = await Youtube.findById(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onInsert(req, res) {
    try {
      let result = await Youtube.insert(req, res);
      res.success(result, 201);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdate(req, res) {
    try {
      const result = await Youtube.update(req, res);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdateSort(req, res) {
    try {
      checkAllowFields(req.body, allowFields.updateSort);
      const result = await Youtube.update(req, res);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onDelete(req, res) {
    try {
      const result = await Youtube.delete(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
