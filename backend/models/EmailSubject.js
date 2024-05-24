const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
  {
    nameTH: { type: String },
    nameEN: { type: String },

    tel: { type: String },
    email: { type: String },
    sort: { type: Number },
    main: { type: Boolean },
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

    email: this.email,
    tel: this.tel,
    sort: this.sort,
    main: this.main,

    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("Email_Subjects", schema);
