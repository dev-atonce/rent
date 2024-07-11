const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/bannerPanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/all/", controllers.onGetAll);

router.get("/:id", [validator.banner.findById, validator.check], controllers.onGetById);

router.post("/", controllers.onInsert);

router.put("/:id", controllers.onUpdate);

router.put("/sort/:id", [validator.banner.sort, validator.check], controllers.onUpdateSort);

router.put("/status/:id", [validator.banner.status, validator.check], controllers.onUpdateStatus);

router.delete("/:id", [validator.banner.deleteById, validator.check], controllers.onDelete);

module.exports = router;
