const router = require("express").Router();
const controllers = require("../../../controllers/page/trainingCoursePage.controller");
const validator = require("../../../validators");

router.get("/", controllers.onGet);
router.get("/url/:url", [validator.trainingCourse.url, validator.check], controllers.onGetByUrl);

module.exports = router;
