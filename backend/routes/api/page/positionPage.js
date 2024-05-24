const router = require("express").Router();
const controllers = require("../../../controllers/page/positionPage.controller");
const auth = require("../../auth");

router.get("/", controllers.onGetAll);
router.get("/:id", controllers.onGetById);
router.post("/", controllers.onInsert);
router.put("/:id", controllers.onUpdate);
router.put("/sort/:id", controllers.onUpdateSort);
router.delete("/:id", controllers.onDelete);

module.exports = router;
