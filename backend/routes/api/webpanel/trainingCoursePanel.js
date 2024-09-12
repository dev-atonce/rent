const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/trainingCoursePanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/all/", auth.required, controllers.onGetAll);

router.get(
  "/:id",
  [auth.required, validator.trainingCourse.findById, validator.check],
  controllers.onGetById
);

router.post("/", auth.required, controllers.onInsert);

router.put("/:id", auth.required, controllers.onUpdate);

router.put(
  "/sort/:id",
  [auth.required, validator.trainingCourse.sort, validator.check],
  controllers.onUpdateSort
);

router.put(
  "/status/:id",
  [auth.required, validator.trainingCourse.status, validator.check],
  controllers.onUpdateStatus
);

router.delete(
  "/:id",
  [auth.required, validator.trainingCourse.deleteById, validator.check],
  controllers.onDelete
);

module.exports = router;
