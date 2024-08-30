const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    nameTH: { type: String },
    addressTH: { type: String },
    image: { type: String },
    main: { type: Boolean },
    email: { type: String },
    tel: { type: String },
    fax: { type: String },
    sort: { type: Number },
    url: { type: String },
    googleMap: { type: String },
  },
  { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    nameTH: this.nameTH,
    addressTH: this.addressTH,
    image: this.image,
    main: this.main,
    email: this.email,
    tel: this.tel,
    fax: this.fax,
    sort: this.sort,
    googleMap: this.googleMap,
    url: this.url,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("Address", schema);
