const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/servicePanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/all/", controllers.onGetAll);
router.get(
  "/:id",
  [validator.service.findById, validator.check],
  controllers.onGetById
);
router.post(
  "/",
  [validator.service.create, validator.check],
  controllers.onInsert
);
router.put(
  "/:id",
  [validator.service.update, validator.check],
  controllers.onUpdate
);
router.put(
  "/seo/:id",
  [validator.service.seo, validator.check],
  controllers.onUpdateSeo
);
router.put(
  "/sort/:id",
  [validator.service.sort, validator.check],
  controllers.onUpdateSort
);
router.put(
  "/status/:id",
  [validator.service.status, validator.check],
  controllers.onUpdateStatus
);
router.delete(
  "/:id",
  [validator.service.deleteById, validator.check],
  controllers.onDelete
);

module.exports = router;
