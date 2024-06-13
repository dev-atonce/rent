const Calendar = require("../../services/page/calendarPage.service");

const methods = {
    async onGet(req, res) {
        try {
            let result = await Calendar.findById(req);
            res.success(result);
        } catch (error) {
            res.error(error);
        }
    },
};

module.exports = { ...methods };
