const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/logPanel.controller");
const auth = require("../../auth");

router.get("/", auth.required, controllers.onGetAll);
router.get("/:id", auth.required, controllers.onGetById);
router.post("/", auth.required, controllers.onInsert);
router.put("/", auth.required, controllers.onUpdate);
// router.delete("/:id", controllers.onDelete);

module.exports = router;
