const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
  {
    serviceNameTH: { type: String },
    serviceNameEN: { type: String },
    serviceDescriptionTH: { type: String },
    serviceDescriptionEN: { type: String },
    serviceDetailTH: { type: String },
    serviceDetailEN: { type: String },
    serviceUrl: { type: String, unique: true, required: true },
    // image: { type: String },
    // imageAlt: { type: String },
    sort: { type: Number },
    status: { type: Boolean, default: false },
    serviceSeo: {
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
    serviceNameTH: this.serviceNameTH,
    serviceNameEN: this.serviceNameEN,
    serviceDescriptionTH: this.serviceDescriptionTH,
    serviceDescriptionEN: this.serviceDescriptionEN,
    serviceDetailTH: this.serviceDetailTH,
    serviceDetailEN: this.serviceDetailEN,
    serviceUrl: this.serviceUrl,
    // image: this.image,
    // imageAlt: this.imageAlt,
    sort: this.sort,
    status: this.status,
    serviceSeo: {
      titleTH: this.serviceSeo["titleTH"],
      titleEN: this.serviceSeo["titleEN"],
      keywordTH: this.serviceSeo["keywordTH"],
      keywordEN: this.serviceSeo["keywordEN"],
      descriptionTH: this.serviceSeo["descriptionTH"],
      descriptionEN: this.serviceSeo["descriptionEN"],
    },
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("Services", schema);
