const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    max: 50,
  },
  lname: {
    type: String,
    required: true,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  address: {
    type: String,
    required: true,
    max: 50,
  },
  phone_number: {
    type: String,
    required: true,
    max: 50,
  },
});

module.exports = mongoose.model("User", userSchema);
