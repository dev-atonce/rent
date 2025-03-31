const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
  {
    nameTH: { type: String },
    nameEN: { type: String },
    positionDetailTH: { type: String },
    image: { type: String },
    sort: { type: Number },
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
    positionDetailTH: this.positionDetailTH,
    image: this.image,

    sort: this.sort,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("Positions", schema);
