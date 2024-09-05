const router = require("express").Router();

//// page ////
router.use("/page/project", require("./page/projectPage"));
router.use("/page/seo", require("./page/seoPage"));
router.use("/page/position", require("./page/positionPage"));
router.use("/page/address", require("./page/addressPage"));
router.use("/page/product", require("./page/productPage"));
router.use("/page/category-main", require("./page/categoryMainPage"));
router.use("/page/category-sub", require("./page/categorySubPage"));
router.use("/page/training-course", require("./page/traningCoursePage"));
router.use("/page/calendar", require("./page/calendarPage"));
router.use("/page/banner", require("./page/bannerPage"));
router.use("/page/logo", require("./page/logoPage"));
router.use("/page/about-us", require("./page/aboutUsPage"));
router.use("/page/contact-forms", require("./page/contactFormPage"));

//////////////

// webpanel //
router.use("/webpanel/project", require("./webpanel/projectPanel"));
router.use("/webpanel/seo", require("./webpanel/seoPanel"));
router.use("/webpanel/users", require("./webpanel/userPanel"));
router.use("/webpanel/log", require("./webpanel/logPanel"));
router.use("/webpanel/product", require("./webpanel/productPanel"));
router.use("/webpanel/address", require("./webpanel/addressPanel"));
router.use("/webpanel/position", require("./webpanel/positionPanel"));
router.use("/webpanel/category-main", require("./webpanel/categoryMainPanel"));
router.use("/webpanel/category-sub", require("./webpanel/categorySubPanel"));
router.use("/webpanel/training-course", require("./webpanel/trainingCoursePanel"));
router.use("/webpanel/calendar", require("./webpanel/calendarPanel"));
router.use("/webpanel/banner", require("./webpanel/bannerPanel"));
router.use("/webpanel/media", require("./webpanel/mediaPanel"));
router.use("/webpanel/logo", require("./webpanel/logoPanel"));
router.use("/webpanel/about-us", require("./webpanel/aboutUsPanel"));
router.use("/webpanel/contact-forms", require("./webpanel/contactFormPanel"));
router.use("/webpanel/youtube", require("./webpanel/youtubePanel"));

//////////////

module.exports = router;
