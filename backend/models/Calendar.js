const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        titleTH: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        trainingCourse: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TrainingCourses",
        },
    },
    { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
    return {
        id: this._id,
        titleTH: this.titleTH,
        startDate: this.startDate,
        endDate: this.endDate,
        trainingCourse: this.trainingCourse,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

module.exports = mongoose.model("Calendars", schema);
