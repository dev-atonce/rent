const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
  {
    productNameTH: { type: String },
    productDescriptionTH: { type: String },
    productDetailTH: { type: String },
    productUrl: { type: String },
    image: { type: String },
    imageAlt: { type: String },
    gallery: { type: Array },
    type: { type: String },
    sort: { type: Number },
    status: { type: Boolean, default: false },
    productSeo: {
      titleTH: { type: String },
      keywordTH: { type: String },
      descriptionTH: { type: String },
    },
    subCategory: { type: mongoose.Schema.Types.ObjectId, ref: "CategorySubs" },
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
    productNameTH: this.productNameTH,
    productDescriptionTH: this.productDescriptionTH,
    productDetailTH: this.productDetailTH,
    productUrl: this.productUrl,
    image: this.image,
    imageAlt: this.imageAlt,
    gallery: this.gallery,
    type: this.type,
    sort: this.sort,
    status: this.status,
    productSeo: {
      titleTH: this.productSeo["titleTH"],
      keywordTH: this.productSeo["keywordTH"],
      descriptionTH: this.productSeo["descriptionTH"],
    },
    subCategory: this.subCategory,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("Products", schema);
