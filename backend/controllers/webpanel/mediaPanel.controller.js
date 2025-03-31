const Media = require("../../services/webpanel/mediaPanel.service");

const methods = {
    /////// Product Image ///////
    async onGetProductById(req, res) {
        try {
            let result = await Media.findProductById(req.params.id);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onInsertProduct(req, res) {
        try {
            let result = await Media.insertProduct(req, res);
            res.success(result, 201);
        } catch (error) {
            res.error(error);
        }
    },
    /////// ///////////// ///////

    /////// Project Image ///////
    async onGetProjectById(req, res) {
        try {
            let result = await Media.findProjectById(req.params.id);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onInsertProject(req, res) {
        try {
            let result = await Media.insertProject(req, res);
            res.success(result, 201);
        } catch (error) {
            res.error(error);
        }
    },  
    /////// ///////////// ///////

    /////// About us Image ///////
    async onGetAboutUsById(req, res) {
        try {
            let result = await Media.findAboutUs();
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onInsertAboutUs(req, res) {
        try {
            let result = await Media.insertAboutUs(req, res);
            res.success(result, 201);
        } catch (error) {
            res.error(error);
        }
    },  
    /////// ///////////// ///////

    async onDeleteMedia(req, res) {
        try {
            let result = await Media.deleteMedia(req, res);
            res.success(result, 201);
        } catch (error) {
            res.error(error);
        }
    },
};

module.exports = { ...methods };
