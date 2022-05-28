const express = require("express");
var cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// const User = require("./model/userModel.js");
app.use(cors());
// Data flow
const bannerSlider = require("./bannerSliderData.js");
mongoose.connect("mongodb://localhost:27017/ecommerce", () => {
  console.log("DB is connected !!!");
});
// ================== Data from MongoDB ================
// User Data

app.get("/", function (req, res) {
  res.send("You are viewing the Server");
});
// Home banner Slider data
app.get("/bannerSlider", function (req, res) {
  res.send(bannerSlider);
});

app.listen(8000, () => {
  console.log("Server is running in port 8000");
});
