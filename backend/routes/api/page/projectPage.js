const router = require("express").Router();
const controllers = require("../../../controllers/page/projectPage.controller");
const validator = require("../../../validators");

router.get("/", controllers.onGet);

router.get("/:id", controllers.onGetById);

module.exports = router;
