const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String },
    trainingCourse: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrainingCourses",
      required: true,
    },
  },
  { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    title: this.title,
    start: this.start,
    end: this.end,
    trainingCourse: this.trainingCourse,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("Calendars", schema);
