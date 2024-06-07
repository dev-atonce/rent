const CategorySub = require("../../services/page/categorySubPage.service");
const { checkAllowFields } = require("../../helpers/field.helper");

const allowFields = {
  updateStatus: ["status"],

  updateSort: ["sort"],
};

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

  async onInsert(req, res) {
    try {
      let result = await CategorySub.insert(req, res);
      res.success(result, 201);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdate(req, res) {
    try {
      const result = await CategorySub.update(req, res);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onDelete(req, res) {
    try {
      const result = await CategorySub.delete(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdateSort(req, res) {
    try {
      checkAllowFields(req.body, allowFields.updateSort);
      const result = await CategorySub.update(req, res);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdateStatus(req, res) {
    try {
      checkAllowFields(req.body, allowFields.updateStatus);
      const result = await CategorySub.update(req.params.id, req.body);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
