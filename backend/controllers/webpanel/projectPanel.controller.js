const Project = require("../../services/webpanel/projectPanel.service");
const { checkAllowFields } = require("../../helpers/field.helper");

const allowFields = {
  updateSeo: ["projectSeo"],

  updateStatus: ["status"],

  updateSort: ["sort"],
};

const methods = {
  async onGetAll(req, res) {
    try {
      let result = await Project.findAll(req);
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

  async onInsert(req, res) {
    try {
      let result = await Project.insert(req, res);
      res.success(result, 201);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdate(req, res) {
    try {
      const result = await Project.update(req, res);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdateSort(req, res) {
    try {
      checkAllowFields(req.body, allowFields.updateSort);
      const result = await Project.update(req.params.id, req.body);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdateStatus(req, res) {
    try {
      checkAllowFields(req.body, allowFields.updateStatus);
      const result = await Project.update(req.params.id, req.body);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onDelete(req, res) {
    try {
      const result = await Project.delete(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onDeleteGallery(req, res) {
    try {
      let result = await Project.deleteGallery(
        req.params.id,
        req.params.position
      );
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
