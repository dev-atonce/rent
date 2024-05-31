const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/productPanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/all/", controllers.onGetAll);

router.get(
  "/:id",
  [validator.product.findById, validator.check],
  controllers.onGetById
);

router.post("/", controllers.onInsert);

router.put("/:id", controllers.onUpdate);

router.put(
  "/sort/:id",
  [validator.product.sort, validator.check],
  controllers.onUpdateSort
);

router.put(
  "/status/:id",
  [validator.product.status, validator.check],
  controllers.onUpdateStatus
);

router.delete(
  "/:id",
  [validator.product.deleteById, validator.check],
  controllers.onDelete
);

router.delete(
  "/gallery/:position/:id",
  [validator.product.deleteGallery, validator.check],
  controllers.onDeleteGallery
);

module.exports = router;
