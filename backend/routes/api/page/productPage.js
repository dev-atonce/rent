const router = require("express").Router();
const controllers = require("../../../controllers/page/productPage.controller");
const validator = require("../../../validators");

router.get("/", controllers.onGet);
router.get(
    "/url/:url",
    [validator.product.url, validator.check],
    controllers.onGetByUrl
);

module.exports = router;
