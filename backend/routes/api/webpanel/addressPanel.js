const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/addressPanel.controller");
const auth = require("../../auth");

router.get("/", auth.required, controllers.onGetAll);
router.get("/:id", auth.required, controllers.onGetById);
router.post("/", auth.required, controllers.onInsert);
router.put("/:id", auth.required, controllers.onUpdate);
router.put("/sort/:id", auth.required, controllers.onUpdateSort);
router.delete("/:id", auth.required, controllers.onDelete);

module.exports = router;
