const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
  {
    titleTH: { type: String },
    url: { type: String },
    price: { type: Number },
    duration: { type: String },
    place: { type: String },
    time: { type: String },
    image: { type: String },
    imageAlt: { type: String },
    gallery: { type: Array },
    sort: { type: Number },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

schema.plugin(uniqueValidator);

schema.pre("save", async function (next) {
  if (!this.sort) {
    try {
      const maxSort = await this.constructor.findOne().sort("-sort").exec();
      this.sort = maxSort ? maxSort.sort + 1 : 0;
      next();
    } catch (error) {
      next(error);
    }
  }
});

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    titleTH: this.titleTH,
    url: this.url,
    price: this.price,
    duration: this.duration,
    place: this.place,
    time: this.time,
    image: this.image,
    imageAlt: this.imageAlt,
    gallery: this.gallery,
    sort: this.sort,
    status: this.status,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("TrainingCourses", schema);
