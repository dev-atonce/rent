const { param, body } = require("express-validator");

module.exports = {
  findById: [param("id").notEmpty().withMessage("is empty")],

  create: [
    body("serviceNameTH")
      .if((value, { req }) => !req.body.serviceNameEN)
      .notEmpty()
      .withMessage("is empty"),
    body("serviceNameEN")
      .if((value, { req }) => !req.body.serviceNameTH)
      .notEmpty()
      .withMessage("is empty"),
    body("serviceDescriptionTH")
      .if((value, { req }) => !req.body.serviceDescriptionEN)
      .notEmpty()
      .withMessage("is empty"),
    body("serviceDescriptionEN")
      .if((value, { req }) => !req.body.serviceDescriptionTH)
      .notEmpty()
      .withMessage("is empty"),
    body("serviceUrl").notEmpty().withMessage("is empty"),
    // body("image").notEmpty().withMessage("is empty"),
    // body("imageAlt").notEmpty().withMessage("is empty"),
  ],

  update: [
    param("id").notEmpty().withMessage("is empty"),
    body("serviceNameTH")
      .if((value, { req }) => !req.body.serviceNameEN)
      .notEmpty()
      .withMessage("is empty"),
    body("serviceNameEN")
      .if((value, { req }) => !req.body.serviceNameTH)
      .notEmpty()
      .withMessage("is empty"),
    body("serviceDescriptionTH")
      .if((value, { req }) => !req.body.serviceDescriptionEN)
      .notEmpty()
      .withMessage("is empty"),
    body("serviceDescriptionEN")
      .if((value, { req }) => !req.body.serviceDescriptionTH)
      .notEmpty()
      .withMessage("is empty"),
    body("serviceUrl").notEmpty().withMessage("is empty"),
  ],

  deleteById: [param("id").notEmpty().withMessage("is empty")],

  sort: [
    param("id").notEmpty().withMessage("is empty"),
    body("sort").notEmpty().withMessage("is empty"),
  ],
  status: [
    param("id").notEmpty().withMessage("is empty"),
    body("status").notEmpty().withMessage("is empty"),
  ],

  seo: [
    param("id").notEmpty().withMessage("is empty"),
  ],

  url: [
    param("url").notEmpty().withMessage("is empty"),
  ],

};
