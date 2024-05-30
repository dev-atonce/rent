const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/categorySubPanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/", controllers.onGetAll);
router.get(
  "/:id",
  [validator.category.findById, validator.check],
  controllers.onGetById
);
router.post("/", controllers.onInsert);
router.put("/:id", controllers.onUpdate);
router.delete(
  "/:id",
  [validator.category.deleteById, validator.check],
  controllers.onDelete
);

router.put(
  "/sort/:id",
  [validator.category.sort, validator.check],
  controllers.onUpdateSort
);

router.put(
  "/status/:id",
  [validator.category.status, validator.check],
  controllers.onUpdateStatus
);
module.exports = router;
