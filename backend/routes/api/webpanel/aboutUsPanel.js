const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/aboutusPanel.controller");
const auth = require("../../auth");

router.get("/", auth.required, controllers.onGetOne);

router.put("/", auth.required, controllers.onUpdate);

router.put("/all", controllers.onUpdateAll);

module.exports = router;
