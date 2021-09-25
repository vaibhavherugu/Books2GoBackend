const mongoose = require("mongoose");

const BooksSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: "",
  },
  genre: {
    type: String,
    required: false,
  },
  cover: {
    type: String,
    required: true,
    default: "",
  },
  checkedOut: {
    type: Boolean,
    required: true,
    default: false,
  },
  lenderEmail: {
    type: String,
    required: true,
    default: "",
  },
});

module.exports = mongoose.model("Book", BooksSchema);
