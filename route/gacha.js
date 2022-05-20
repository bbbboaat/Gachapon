const express = require("express");
const app = express.Router();
const User = require("../mongoose/user");
const tokenModel = require("../mongoose/tokenModel");
const { response } = require("express");
const Gacha = require("../mongoose/gacha");

const rand = function () {
  return Math.random().toString(36).substr(2);
};

const tokenGen = function () {
  return rand() + rand();
};

const hostAuth = (req, res, next) => {
  //   console.log(req.headers.isAdmin);
  //   if (req.headers.isadmin == "1") {
  if (true) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

app.post("/gacha", hostAuth, async (req, res) => {
  //   console.log("success");

  let resStatus = 200;
  let resMessage = "add Success";

  let _item = req.body.item || "";
  let _rank = req.body.rank || "";

  if (_item === "" || _rank === "") {
    resStatus = 400;
    resMessage = "bad request";
    res.status(resStatus).send({ resMessage });
  }
  let newGacha = Gacha({
    item: _item,
    rank: _rank,
  });

  await newGacha.save();
  resMessage = newGacha;

  res.status(resStatus).send({ resMessage });
});

app.get("/gacha", hostAuth, async (req, res) => {
  let resStatus = 200;
  let resMessage = "add Success";
  let allGacha = await Gacha.find({});

  resMessage = allGacha;

  res.status(resStatus).send({ resMessage });
});

app.put("/gacha", hostAuth, async (req, res) => {
  let resStatus = 200;
  let resMessage = "add Success";

  let _item = req.body.item || "";
  let _rank = req.body.rank || "";

  const filter = { item: _item };
  const update = { rank: _rank };

  if (_item === "" || _rank === "") {
    resStatus = 400;
    resMessage = "bad request";
    res.status(resStatus).send({ resMessage });
  }

  let gacha = await Gacha.findOneAndUpdate(filter, update, {
    new: true,
  });

  resMessage = gacha;

  res.status(resStatus).send({ resMessage });
});

app.delete("/gacha", hostAuth, async (req, res) => {
  let resStatus = 200;
  let resMessage = "add Success";

  let _item = req.body.item || "";

  const filter = { item: _item };

  if (_item === "") {
    resStatus = 400;
    resMessage = "bad request";
    res.status(resStatus).send({ resMessage });
  }

  let gacha = await Gacha.findOneAndDelete(filter);

  resMessage = gacha;

  res.status(resStatus).send({ resMessage });
});

module.exports = app;
