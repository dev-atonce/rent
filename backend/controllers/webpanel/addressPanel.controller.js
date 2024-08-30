const Address = require("../../services/webpanel/addressPanel.service");

const { checkAllowFields } = require("../../helpers/field.helper");

const allowFields = {
  updateStatus: ["status"],

  updateSort: ["sort"],
};
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

  async onInsert(req, res) {
    try {
      let result = await Address.insert(req, res);
      res.success(result, 201);
    } catch (error) {
      res.error(error);
    }
  },
  
  async onUpdate(req, res) {
    try {
      const result = await Address.update(req, res);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdateSort(req, res) {
    try {
      checkAllowFields(req.body, allowFields.updateSort);
      const result = await Address.update(req.params.id, req.body);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onDelete(req, res) {
    try {
      const result = await Address.delete(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
