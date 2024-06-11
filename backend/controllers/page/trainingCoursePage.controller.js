const trainingCourse = require("../../services/page/trainingCoursePage.service");

const methods = {
    async onGet(req, res) {
        try {
            let result = await trainingCourse.find(req);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },

    async onGetByUrl(req, res) {
        try {
            let result = await trainingCourse.findById(req.params.id);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },
};

module.exports = { ...methods };
