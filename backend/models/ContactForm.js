const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        branch: { type: String },
        companyName: { type: String },
        contactName: { type: String },
        email: { type: String },
        telephone: { type: String },
        place:  { type: String },
        detail: { type: String },
        status:  { type: Boolean, default: false },
    },
    { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
    return {
        id: this._id,
        branch: this.branch,
        companyName: this.companyName,
        contactName: this.contactName,
        email: this.email,
        telephone:this.telephone,
        place: this.place,
        detail: this.detail,
        status: this.status,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
};

module.exports = mongoose.model("Contact_forms", schema);
