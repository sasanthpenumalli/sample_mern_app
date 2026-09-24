let mongoose = require("mongoose");
let userschema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  role: {
    type: String,
    enum:["HR", "Employee"]
  },
});
let users = mongoose.model("users", userschema);
module.exports = { users };