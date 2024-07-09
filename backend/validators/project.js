const { param, body } = require("express-validator");

module.exports = {
  findById: [param("id").notEmpty().withMessage("is empty")],

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
  
  deleteGallery: [param("id").notEmpty().withMessage("is empty")],

};
