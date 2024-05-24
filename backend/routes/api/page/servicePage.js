const router = require("express").Router();
const controllers = require("../../../controllers/page/servicePage.controller");
const validator = require("../../../validators");

router.get("/", controllers.onGet);
router.get("/url/:url", [validator.service.url, validator.check], controllers.onGetByUrl);

module.exports = router;
