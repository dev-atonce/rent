const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/userPanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/", controllers.onGetAll);
router.get("/:id", auth.required, controllers.onGetById);
router.post(
  "/",
  [validator.user.create, validator.check],
  controllers.onInsert
);
router.put(
  "/:id",
  [validator.user.update, validator.check],
  controllers.onUpdate
);
router.delete(
  "/:id",
  [validator.user.deleteById, validator.check],
  controllers.onDelete
);

router.post("/login", controllers.onLogin);
router.post("/register", controllers.onRegister);
router.post("/refresh-token", controllers.onRefreshToken);

module.exports = router;
