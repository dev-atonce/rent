const Calendar = require("../../models/Calendar");

const { ErrorNotFound } = require("../../configs/errorMethods");

const methods = {
    async findById(req) {
        try {
            const rows = await Calendar.find({ trainingCourse: req.params.id })
                .select('title start end -_id')
                .populate("trainingCourse");
            return {
                rows: rows,
            };
        } catch (error) {
            return Promise.reject(ErrorNotFound(error.message));
        }
    },
};

module.exports = { ...methods };
