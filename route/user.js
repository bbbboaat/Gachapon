const express = require("express");
const app = express.Router();
const User = require("../mongoose/user");
const tokenModel = require("../mongoose/tokenModel");
const { response } = require("express");
const Coin = require("../mongoose/coin");

const rand = function () {
  return Math.random().toString(36).substr(2);
};

const tokenGen = function () {
  return rand() + rand();
};

app.post("/register", async (req, res) => {
  console.log("success");

  let resStatus = 200;
  let resMessage = "Success";

  let _username = req.body.username || "";
  let _password = req.body.password || "";
  let _role = req.body.role || "";
  let _tier = req.body.tier || "";

  let _coin = req.body.coin;

  let usernameid = await User.findOne({
    username: _username,
  });

  if (usernameid === null) {
    if (_username === "" || _password === "" || _role === "" || _tier === "") {
      resStatus = 400;
      resMessage = "bad request";
      res.status(resStatus).send({ resMessage });
    }

    let newUser = User({
      username: _username,
      password: _password,
      role: _role,
      tier: _tier,
      coin: _coin,
    });
    await newUser.save();

    res.status(resStatus).send({ resMessage });
  } else {
    res.status(resStatus).send({ resMessage });
  }
});

app.post("/login", async (req, res) => {
  let resStatus = 200;
  let resMessage = "Success";
  let _username = req.body.username || "";
  let _password = req.body.password || "";

  let usernameid = await User.findOne({
    username: _username,
    password: _password,
  });

  console.log(`username : ${_username} , password : ${_password}`);
  if (usernameid === null) {
    console.log("NULL!!");
    let resStatus = 400;
    let resMessage = "Login Failed";
    res.status(resStatus).send({ resMessage });
  } else {
    console.log(usernameid);

    await tokenModel.deleteMany({ userId: usernameid._id });
    let newToken = tokenModel({
      tokenString: tokenGen(),
      userId: usernameid._id,
    });
    await newToken.save();
  }
  res.status(resStatus).send({ resMessage });
});

app.post("/topup", async (req, res) => {
  let resStatus = 200;
  let resMessage = "add Success";
  let _username = req.body.username || "";
  let _password = req.body.password || "";
  let _coin = req.body.coin;

  const filter = { username: _username };
  if (_username === "") {
    resStatus = 400;
    resMessage = "bad request";
    res.status(resStatus).send({ resMessage });
  }

  let usernameid = await User.findOne({
    username: _username,
    password: _password,
  });
  if (usernameid === null) {
    console.log("NULL!!");
    let resStatus = 400;
    let resMessage = "Login Failed";
    res.status(resStatus).send({ resMessage });
  } else {
    _coin = usernameid.coin + _coin;
  }
  const update = { coin: _coin };
  let user = await User.findOneAndUpdate(filter, update, {
    new: true,
  });
  resMessage = user;

  res.status(resStatus).send({ resMessage });
});

module.exports = app;
