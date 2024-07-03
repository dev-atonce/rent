const router = require("express").Router();
const controllers = require("../../../controllers/page/projectPage.controller");
const validator = require("../../../validators");

router.get("/", controllers.onGet);
router.get(
  "/url/:url",
  [validator.project.url, validator.check],
  controllers.onGetByUrl
);
router.get(
  "/url/:url",
  [validator.project.url, validator.check],
  controllers.onGetByUrl
);
router.get("/:id", controllers.onGetById);

module.exports = router;
