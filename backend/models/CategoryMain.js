const mongoose = require("mongoose");
const { sort } = require("../validators/service");

const schema = new mongoose.Schema(
  {
    nameTH: { type: String },
    image: { type: String },
    imageAlt: { type: String },
    seo: {
      titleTH: { type: String },
      keywordTH: { type: String },
      descriptionTH: { type: String },
    },
    status: { type: Boolean, default: false },
    sort: { type: Number },
  },
  { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    nameTH: this.nameTH,
    image: this.image,
    imageAlt: this.imageAlt,
    seo: {
      titleTH: this.seo["titleTH"],
      keywordTH: this.seo["keywordTH"],
      descriptionTH: this.seo["descriptionTH"],
    },
    sort: this.sort,
    status: this.status,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("CategoryMains", schema);
