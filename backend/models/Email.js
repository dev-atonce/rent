const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        contactName: { type: String },
        companyName: { type: String },
        email: { type: String },
        telephone: { type: Number },
        detail: { type: String }
    },
    { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
    return {
        id: this._id,
        contactName: this.contactName,
        companyName: this.companyName,
        email: this.email,
        telephone:this.telephone,
        detail: this.detail,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

module.exports = mongoose.model("Contacts", schema);
