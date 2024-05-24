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

router.post(
  "/",
  [validator.product.create, validator.check],
  controllers.onInsert
);

router.post(
  "/gallery",
  [validator.product.gallery, validator.check],
  controllers.onInsertGallery
);

router.put(
  "/:id",
  [validator.product.update, validator.check],
  controllers.onUpdate
);

router.put(
  "/gallery/:id",
  [validator.product.updateGallery, validator.check],
  controllers.onUpdate
);

router.put(
  "/seo/:id",
  [validator.product.seo, validator.check],
  controllers.onUpdateSeo
);

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

module.exports = router;
