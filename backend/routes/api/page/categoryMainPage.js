const router = require("express").Router();
const controllers = require("../../../controllers/page/categoryMainPage.controller");
const auth = require("../../auth");

router.get("/", controllers.onGetAll);

module.exports = router;
