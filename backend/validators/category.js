const { param, body } = require("express-validator");

module.exports = {
    findById: [param("id").notEmpty().withMessage("is empty")],

    create: [
        body("nameTH").notEmpty().withMessage("is empty"),
        body("image").notEmpty().withMessage("is empty"),
        body("imageAlt").notEmpty().withMessage("is empty"),
    ],

    update: [
        param("id").notEmpty().withMessage("is empty"),
        body("nameTH").notEmpty().withMessage("is empty"),
        body("imageAlt").notEmpty().withMessage("is empty"),
    ],

    deleteById: [param("id").notEmpty().withMessage("is empty")],
};
