const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const config = require("../configs/app");

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      uniqueCaseInsensitive: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      uniqueCaseInsensitive: false,
      validate: {
        validator: function (email) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
        },
        message: "Invalid email format",
      },
    },
    password: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);

// Apply the uniqueValidator plugin to userSchema.
schema.plugin(uniqueValidator);

// Schema method to generate JWT
schema.methods.generateJWT = function (obj) {
  // Create a payload object with the user information
  const payload = {
    id: this._id,
    username: this.username,
  };

  // Sign the JWT with the payload, secret key, and expiration options
  return jwt.sign(payload, config.secret, { expiresIn: "1d" });
};

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    username: this.username,
    email: this.email,
    role: this.role,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

// Hash Password
schema.methods.passwordHash = function (password) {
  return crypto.createHash("sha1").update(password).digest("hex");
};

// Verify Password
schema.methods.validPassword = function (password) {
  return this.passwordHash(password) === this.password;
};

// Custom field before save
schema.pre("save", async function (next) {
  this.password = await this.passwordHash(this.password);
  next();
});

schema.pre("updateOne", function (next) {
  const update = this.getUpdate();
  if (update.password) {
    update.password = schema.methods.passwordHash(update.password);
  }
  next();
});

module.exports = mongoose.model("Users", schema);
