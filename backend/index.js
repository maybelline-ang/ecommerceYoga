const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log("MongoDB connection failed");
  });

app.listen(process.env.PORT || 5001, () => {
  console.log("Backend server is running");
});
