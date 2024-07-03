const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/trainingCoursePanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/all/", controllers.onGetAll);

router.get(
  "/:id",
  [validator.trainingCourse.findById, validator.check],
  controllers.onGetById
);

router.post("/", controllers.onInsert);

router.put("/:id", controllers.onUpdate);

router.put(
  "/sort/:id",
  [validator.trainingCourse.sort, validator.check],
  controllers.onUpdateSort
);

router.put(
  "/status/:id",
  [validator.trainingCourse.status, validator.check],
  controllers.onUpdateStatus
);

router.delete(
  "/:id",
  [validator.trainingCourse.deleteById, validator.check],
  controllers.onDelete
);

module.exports = router;
