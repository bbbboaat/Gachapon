const express = require("express");
const parser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const User = require("./mongoose/user");
const tokenModel = require("./mongoose/user");
const bodyParser = require("body-parser");
const userRouter = require("./route/user");
const gachaRouter = require("./route/gacha");

app.use(bodyParser.json());
app.use("", userRouter);
app.use("", gachaRouter);

mongoose.connect(
  "mongodb+srv://boat:boat@cluster0.0pjc1.mongodb.net/test",
  () => {
    console.log("connect database");
  }
);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
