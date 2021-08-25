const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const booksRoute = require("./routes/book");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to Database")
);

app.use(express.json());

app.use("", authRoute);
app.use("/books", booksRoute);

app.listen(3000, () => console.log("Server Up and Running"));