const Email = require("../../services/page/emailPage.service");

const methods = {
    async send(req, res) {
        try {
            let result = await Email.sendEmail(req);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },
};

module.exports = { ...methods };
