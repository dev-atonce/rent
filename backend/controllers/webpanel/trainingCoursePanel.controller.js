const trainingCourse = require("../../services/webpanel/trainingCoursePanel.service");
const { checkAllowFields } = require("../../helpers/field.helper");

const allowFields = {
  updateStatus: ["status"],

  updateSort: ["sort"],
};

const methods = {
  async onGetAll(req, res) {
    try {
      let result = await trainingCourse.findAll(req);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onGetById(req, res) {
    try {
      let result = await trainingCourse.findById(req.params.id);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onInsert(req, res) {
    try {
      let result = await trainingCourse.insert(req, res);
      res.success(result, 201);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdate(req, res) {
    try {
      const result = await trainingCourse.update(req, res);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdateSort(req, res) {
    try {
      checkAllowFields(req.body, allowFields.updateSort);
      const result = await trainingCourse.update(req, res);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onUpdateStatus(req, res) {
    try {
      checkAllowFields(req.body, allowFields.updateStatus);
      const result = await trainingCourse.update(req, res);
      res.success(result);
    } catch (error) {
      res.error(error);
    }
  },

  async onDelete(req, res) {
    try {
      const result = await trainingCourse.delete(req.params.id);

      res.success("success", 204);
    } catch (error) {
      res.error(error);
    }
  },
};

module.exports = { ...methods };
