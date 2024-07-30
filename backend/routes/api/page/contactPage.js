const router = require("express").Router();
const controllers = require("../../../controllers/page/contactPage.controller");
const auth = require("../../auth");

router.get("/", controllers.onGetAll);
router.get("/:id", controllers.onGetById);

module.exports = router;
