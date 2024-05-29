const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
  {
    projectNameTH: { type: String },
    projectNameEN: { type: String },
    projectDescriptionTH: { type: String },
    projectDescriptionEN: { type: String },
    projectDetailTH: { type: String },
    projectDetailEN: { type: String },
    projectUrl: { type: String, unique: true, required: true },
    // image: { type: String },
    // imageAlt: { type: String },
    sort: { type: Number },
    status: { type: Boolean, default: false },
    projectSeo: {
      titleTH: { type: String },
      titleEN: { type: String },
      keywordTH: { type: String },
      keywordEN: { type: String },
      descriptionTH: { type: String },
      descriptionEN: { type: String },
    },
  },
  { timestamps: true }
);

schema.plugin(uniqueValidator);

schema.pre("validate", function (next) {
  if (!this.serviceNameTH && !this.serviceNameEN)
    return next(new Error("Please fill serviceName in at least 1 field."));

  if (!this.serviceDescriptionTH && !this.serviceDescriptionEN)
    return next(
      new Error("Please fill serviceDescription in at least 1 field.")
    );

  next();
});

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
    projectNameTH: this.projectNameTH,
    projectNameEN: this.projectNameEN,
    projectDescriptionTH: this.projectDescriptionTH,
    projectDescriptionEN: this.projectDescriptionEN,
    projectDetailTH: this.projectDetailTH,
    projectDetailEN: this.projectDetailEN,
    projectUrl: this.projectUrl,
    // image: this.image,
    // imageAlt: this.imageAlt,
    sort: this.sort,
    status: this.status,
    projectSeo: {
      titleTH: this.projectSeo["titleTH"],
      titleEN: this.projectSeo["titleEN"],
      keywordTH: this.projectSeo["keywordTH"],
      keywordEN: this.projectSeo["keywordEN"],
      descriptionTH: this.projectSeo["descriptionTH"],
      descriptionEN: this.projectSeo["descriptionEN"],
    },
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("Projects", schema);
