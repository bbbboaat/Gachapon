const express = require("express");
const app = express.Router();
const User = require("../mongoose/user");
const tokenModel = require("../mongoose/tokenModel");
const { response } = require("express");
const Coin = require("../mongoose/coin");

app.post("/bronze", async (req, res) => {
  let resStatus = 200;
  let resMessage = "add Success";
  let _username = req.body.username || "";
  let _coin = req.body.coin;
  const filter = { username: _username };
  if (_username === "") {
    resStatus = 400;
    resMessage = "bad request";
    res.status(resStatus).send({ resMessage });
  }

  let usernameid = await User.findOne({
    username: _username,
  });
  if (usernameid === null) {
    console.log("NULL!!");
    let resStatus = 400;
    let resMessage = "Login Failed";
    return res.status(resStatus).send({ resMessage });
  } else {
    if (usernameid.coin > 222250) {
      console.log(usernameid.coin);
      var random = Math.floor(Math.random() * 100);
      if (random <= 80) {
        let status = 200;
        let resMessage = " You've got a Rank N";
        return res.status(resStatus).send({ resMessage });
      } else if (random > 80) {
        let status = 200;
        let resMessage = " You've got a Rank R";
        return res.status(resStatus).send({ resMessage });
      }
    }

    return res.status(400).json({ message: "Your coin isn't enoght" });
  }
});

module.exports = app;
