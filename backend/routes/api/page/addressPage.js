const router = require("express").Router();
const controllers = require("../../../controllers/page/addressPage.controller");

router.get("/", controllers.onGetAll);
router.get("/:id", controllers.onGetById);

module.exports = router;
