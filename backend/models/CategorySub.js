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
        mainCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'CategoryMains' },
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
        mainCategory: this.mainCategory,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

module.exports = mongoose.model("CategorySubs", schema);
