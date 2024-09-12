const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: { type: String },
    link: { type: String },
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
    title: this.title,
    link: this.link,
    sort: this.sort,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("Youtubes", schema);
