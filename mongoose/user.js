const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
  tier: String,
  coin: Number,
  inventory: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
