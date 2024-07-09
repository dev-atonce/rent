const router = require("express").Router();
const controllers = require("../../../controllers/page/emailPage.controller");
const auth = require("../../auth");

router.post("/", controllers.send);

module.exports = router;
