const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/productPanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/all/", auth.required, controllers.onGetAll);

router.get(
  "/:id",
  [auth.required, validator.product.findById, validator.check],
  controllers.onGetById
);

router.post("/", auth.required, controllers.onInsert);

router.put("/:id", auth.required, controllers.onUpdate);

router.put(
  "/sort/:id",
  [auth.required, validator.product.sort, validator.check],
  controllers.onUpdateSort
);

router.put(
  "/status/:id",
  [auth.required, validator.product.status, validator.check],
  controllers.onUpdateStatus
);

router.delete(
  "/:id",
  [auth.required, validator.product.deleteById, validator.check],
  controllers.onDelete
);

router.delete(
  "/gallery/:position/:id",
  [auth.required, validator.product.deleteGallery, validator.check],
  controllers.onDeleteGallery
);

module.exports = router;
