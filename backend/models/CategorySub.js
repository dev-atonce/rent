const mongoose = require("mongoose");

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
    mainCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryMains",
    },
    status: { type: Boolean, default: false },
    sort: { type: Number },
  },
  { timestamps: true }
);

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
    mainCategory: this.mainCategory,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("CategorySubs", schema);
