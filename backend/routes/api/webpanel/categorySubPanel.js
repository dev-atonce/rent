const router = require("express").Router();
const controllers = require("../../../controllers/webpanel/categorySubPanel.controller");
const auth = require("../../auth");
const validator = require("../../../validators");

router.get("/", auth.required, controllers.onGetAll);
router.get(
    "/:id",
    [validator.category.findById, validator.check],
    controllers.onGetById
);
router.post(
    "/",
    [validator.category.create, validator.check],
    controllers.onInsert
);
router.put(
    "/:id",
    [validator.category.update, validator.check],
    controllers.onUpdate
);
router.delete(
    "/:id",
    [validator.category.deleteById, validator.check],
    controllers.onDelete
);

module.exports = router;
