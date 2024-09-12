const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/categorySubPanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/", auth.required, controllers.onGetAll);

router.get("/:id", [auth.required, validator.category.findById, validator.check], controllers.onGetById);

router.post("/", auth.required, controllers.onInsert);

router.put("/:id", auth.required, controllers.onUpdate);

router.delete("/:id", [auth.required, validator.category.deleteById, validator.check], controllers.onDelete);

router.put("/sort/:id", [auth.required, validator.category.sort, validator.check], controllers.onUpdateSort);

router.put("/status/:id", [auth.required, validator.category.status, validator.check], controllers.onUpdateStatus);

module.exports = router;
