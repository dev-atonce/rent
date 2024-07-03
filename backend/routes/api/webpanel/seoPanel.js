const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/seoPanel.controller");
const auth = require("../../auth");

router.get("/", controllers.onGetAll);
router.put("/:id", controllers.onUpdate);

module.exports = router;
