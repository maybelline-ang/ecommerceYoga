const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, req: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);