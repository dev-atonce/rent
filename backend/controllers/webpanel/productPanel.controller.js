const Product = require("../../services/webpanel/productPanel.service");
const { checkAllowFields } = require("../../helpers/field.helper");

const allowFields = {
    updateSeo: ["productSeo"],

    updateStatus: ["status"],

    updateSort: ["sort"],
};

const methods = {
    async onGetAll(req, res) {
        try {
            let result = await Product.findAll(req);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onGetById(req, res) {
        try {
            let result = await Product.findById(req.params.id);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onInsert(req, res) {
        try {
            let result = await Product.insert(req, res);
            res.success(result, 201);
        } catch (error) {
            res.error(error);
        }
    },

    async onUpdate(req, res) {
        try {
            const result = await Product.update(req, res);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onUpdateSort(req, res) {
        try {
            checkAllowFields(req.body, allowFields.updateSort);
            const result = await Product.update(req, res);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onUpdateStatus(req, res) {
        try {
            checkAllowFields(req.body, allowFields.updateStatus);
            const result = await Product.update(req, res);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onDelete(req, res) {
        try {
            await Product.delete(req.params.id);
            res.success("success", 204);
        } catch (error) {
            res.error(error);
        }
    },

    async onInsertGallery(req, res) {
        try {
            let result = await Product.insertGallery(req, res);
            res.success(result, 201);
        } catch (error) {
            res.error(error);
        }   
    },

    async onDeleteGallery(req, res) {
        try {
            let result = await Product.deleteGallery(req.params.id, req.params.position);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

};

module.exports = { ...methods };
