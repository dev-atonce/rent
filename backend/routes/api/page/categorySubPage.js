const router = require("express").Router();
const controllers = require("../../../controllers/page/categorySubPage.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/", controllers.onGetAll);

router.get("/:id", [validator.category.findById, validator.check], controllers.onGetById);

module.exports = router;
