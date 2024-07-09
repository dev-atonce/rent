const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
  {
    nameTH: { type: String },
    nameEN: { type: String },
    addressTH: { type: String },
    addressEN: { type: String },
    tel: { type: String },
    fax: { type: String },
    email: { type: String },
    sort: { type: Number },
    main: { type: Boolean },
    url: { type: String },
    googleMap: { type: String },
    googleMapIframe: { type: String },
  },
  { timestamps: true }
);

// schema.plugin(uniqueValidator);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    nameTH: this.nameTH,
    nameEN: this.nameEN,
    addressTH: this.addressTH,
    addressEN: this.addressEN,
    email: this.email,
    tel: this.tel,
    fax: this.fax,
    sort: this.sort,
    main: this.main,
    googleMap: this.googleMap,
    googleMapIframe: this.googleMapIframe,
    url: this.url,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("Contact_lists", schema);
