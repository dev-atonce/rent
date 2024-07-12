const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/mediaPanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

/////// Product Image ///////
router.get("/product/:id", [validator.product.findById, validator.check], controllers.onGetProductById);

router.post("/product/:id", [validator.product.findById, validator.check], controllers.onInsertProduct);
/////// ///////////// ///////

/////// Project Image ///////
// router.get("/:id", [validator.project.findById, validator.check], controllers.onGetProjectById);

// router.post("/project", controllers.onInsertProject);
/////// ///////////// ///////

router.delete("/", controllers.onDeleteMedia);

module.exports = router;
