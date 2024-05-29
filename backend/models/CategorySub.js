const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        mainCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'CategoryMains' },
        nameTH: { type: String },
        image: { type: String },
        imageAlt: { type: String },
        seo: {
            titleTH: { type: String },
            keywordTH: { type: String },
            descriptionTH: { type: String },
        },
    },
    { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
    return {
        id: this._id,
        mainCategory: this.mainCategory,
        nameTH: this.nameTH,
        image: this.image,
        imageAlt: this.imageAlt,
        seo: {
            titleTH: this.seo["titleTH"],
            keywordTH: this.seo["keywordTH"],
            descriptionTH: this.seo["descriptionTH"],
        },
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

module.exports = mongoose.model("CategorySubs", schema);
