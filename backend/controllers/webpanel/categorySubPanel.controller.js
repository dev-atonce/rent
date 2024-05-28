const CategorySub = require("../../services/webpanel/categorySubPanel.service");
const { checkAllowFields } = require("../../helpers/field.helper");

const allowFields = {};

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
            // checkAllowFields(req.body, allowFields.update);
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
};

module.exports = { ...methods };
