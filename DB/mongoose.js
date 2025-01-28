const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);
const userSchema = new mongoose.Schema({
  userId: { type: String },
  pwd: { type: String },
});
const User = mongoose.model("User", userSchema);
module.exports = {
  User,
};
