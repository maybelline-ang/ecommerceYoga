const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log("MongoDB connection failed");
  });

app.use(express.json());

app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5001, () => {
  console.log("Backend server is running");
});
