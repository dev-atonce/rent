const router = require("express").Router();
const controllers = require("../../../controllers/page/calendarPage.controller");
const validator = require("../../../validators");

router.get("/:id", [validator.calendar.findById, validator.check], controllers.onGet);

module.exports = router;
