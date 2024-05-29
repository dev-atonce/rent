const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/projectPanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/all/", controllers.onGetAll);
router.get(
  "/:id",
  [validator.project.findById, validator.check],
  controllers.onGetById
);
router.post(
  "/",
  [validator.project.create, validator.check],
  controllers.onInsert
);
router.put(
  "/:id",
  [validator.project.update, validator.check],
  controllers.onUpdate
);
router.put(
  "/seo/:id",
  [validator.project.seo, validator.check],
  controllers.onUpdateSeo
);
router.put(
  "/sort/:id",
  [validator.project.sort, validator.check],
  controllers.onUpdateSort
);
router.put(
  "/status/:id",
  [validator.project.status, validator.check],
  controllers.onUpdateStatus
);
router.delete(
  "/:id",
  [validator.project.deleteById, validator.check],
  controllers.onDelete
);

module.exports = router;
