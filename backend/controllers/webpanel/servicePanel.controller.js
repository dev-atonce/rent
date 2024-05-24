const Service = require("../../services/webpanel/servicePanel.service");
const { checkAllowFields } = require("../../helpers/field.helper");

const allowFields = {
  update: [
    "serviceNameTH",
    "serviceNameEN",
    "serviceDescriptionTH",
    "serviceDescriptionEN",
    "serviceDetailTH",
    "serviceDetailEN",
    "serviceUrl",
  ],

  updateSeo: ["serviceSeo"],

  updateStatus: ["status"],

  updateSort: ["sort"],
};

const methods = {
  async onGetAll(req, res) {
    try {
      let result = await Service.findAll(req);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetById(req, res) {
    try {
      let result = await Service.findById(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onInsert(req, res) {
    try {
      let result = await Service.insert(req, res);
      res.success(result, 201);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdate(req, res) {
    try {
      checkAllowFields(req.body, allowFields.update);
      const result = await Service.update(req.params.id, req.body);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdateSeo(req, res) {
    try {
      checkAllowFields(req.body, allowFields.updateSeo);
      const result = await Service.update(req.params.id, req.body);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdateSort(req, res) {
    try {
      checkAllowFields(req.body, allowFields.updateSort);
      const result = await Service.update(req.params.id, req.body);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdateStatus(req, res) {
    try {
      checkAllowFields(req.body, allowFields.updateStatus);
      const result = await Service.update(req.params.id, req.body);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onDelete(req, res) {
    try {
      const result = await Service.delete(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
