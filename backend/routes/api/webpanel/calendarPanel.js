const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/calendarPanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/:id", auth.required, controllers.onGetAll);

router.post("/", auth.required, controllers.onInsert);

router.put("/:id", auth.required, controllers.onUpdate);

router.delete("/:id", [auth.required, validator.calendar.deleteById, validator.check], controllers.onDelete);

module.exports = router;
