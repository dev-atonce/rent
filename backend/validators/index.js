const { validationResult } = require("express-validator");

// Import Validators
const user = require("./user");
const project = require("./project");
const product = require("./product");
const category = require("./category");
const trainingCourse = require("./trainingCourse");
const calendar = require("./calendar");

const validators = {
  user,
  project,
  product,
  category,
  trainingCourse,
  calendar
};

module.exports = {
  check(req, res, next) {
    let errors = validationResult(req).array();
    if (errors.length == 0) return next();
    let error = new Error(`${errors[0].path}: ${errors[0].msg}`);
    error.status = 422;
    throw error;
  },
  ...validators,
};