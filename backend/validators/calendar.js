const { param, body } = require("express-validator");

module.exports = {
    findById: [param("id").notEmpty().withMessage("is empty")],

    deleteById: [param("id").notEmpty().withMessage("is empty")],

    url: [param("url").notEmpty().withMessage("is empty")],
};
