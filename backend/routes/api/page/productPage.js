const router = require("express").Router();
const controllers = require("../../../controllers/page/productPage.controller");
const validator = require("../../../validators");

router.get("/", controllers.onGet);

router.get("/:id", [validator.product.findById, validator.check], controllers.onGetById);

module.exports = router;
