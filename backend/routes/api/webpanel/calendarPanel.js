const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/calendarPanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/:id", controllers.onGetAll);

router.post("/", controllers.onInsert);

router.put("/:id", controllers.onUpdate);

router.delete(
  "/:id",
  [validator.calendar.deleteById, validator.check],
  controllers.onDelete
);

module.exports = router;
