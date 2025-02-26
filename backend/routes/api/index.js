const router = require("express").Router();

//// page ////
router.use("/page/project", require("./page/projectPage"));
router.use("/page/seo", require("./page/seoPage"));
router.use("/page/email", require("./page/emailPage"));
router.use("/page/position", require("./page/positionPage"));
router.use("/page/contact", require("./page/contactPage"));
router.use("/page/product", require("./page/productPage"));
router.use("/page/category-main", require("./page/categoryMainPage"));
router.use("/page/category-sub", require("./page/categorySubPage"));
router.use("/page/training-course", require("./page/traningCoursePage"));
router.use("/page/calendar", require("./page/calendarPage"));

//////////////

// webpanel //
router.use("/webpanel/project", require("./webpanel/projectPanel"));
router.use("/webpanel/seo", require("./webpanel/seoPanel"));
router.use("/webpanel/users", require("./webpanel/userPanel"));
router.use("/webpanel/log", require("./webpanel/logPanel"));
router.use("/webpanel/product", require("./webpanel/productPanel"));
router.use("/webpanel/contact", require("./webpanel/contactPanel"));
router.use("/webpanel/position", require("./webpanel/positionPanel"));
router.use("/webpanel/category-main", require("./webpanel/categoryMainPanel"));
router.use("/webpanel/category-sub", require("./webpanel/categorySubPanel"));
router.use("/webpanel/training-course", require("./webpanel/trainingCoursePanel"));
router.use("/webpanel/calendar", require("./webpanel/calendarPanel"));

//////////////

module.exports = router;
