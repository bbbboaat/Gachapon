const express = require("express");
const app = express.Router();
const User = require("../mongoose/user");
const tokenModel = require("../mongoose/tokenModel");
const { response } = require("express");
const Coin = require("../mongoose/coin");
const Gacha = require("../mongoose/gacha");

app.post("/bronze", async (req, res) => {
  let resStatus = 200;
  let resMessage = "add Success";
  let _username = req.body.username || "";
  let _coin = req.body.coin;
  let _item = req.body.item;
  let _rank = req.body.rank;
  let _inventory = req.body.inventory;
  const filter = { username: _username };
  if (_username === "") {
    resStatus = 400;
    resMessage = "bad request";
    res.status(resStatus).send({ resMessage });
  }

  let currentID = await User.findOne({
    username: _username,
  });
  if (currentID === null) {
    console.log("NULL!!");
    let resStatus = 400;
    let resMessage = "Login Failed";
    return res.status(resStatus).send({ resMessage });
  } else {
    if (currentID.coin > 50) {
      let gachaitem = await Gacha.find({
        rank: _rank,
        item: _item,
      });
      console.log(currentID.coin);
      var random = Math.floor(Math.random() * 100);
      if (random <= 80) {
        _rank = "N";
        let resStatus = 200;
        let resMessage = " You've got a Rank N";
        let gachaRankN = await Gacha.find({
          rank: _rank,
        });
        const Nrand = gachaRankN[Math.floor(Math.random() * gachaRankN.length)];
        console.log(gachaRankN);
        _coin = currentID.coin - 50;
        const update = { coin: _coin };
        let user = await User.findOneAndUpdate(filter, update, {
          new: true,
        });
        return res.status(resStatus).send({ resMessage });
      } else if (random > 80) {
        _rank = "R";
        let resStatus = 200;
        let resMessage = " You've got a Rank R";
        let gachaRankR = await Gacha.find({
          rank: _rank,
        });
        const Rrand = gachaRankR[Math.floor(Math.random() * gachaRankR.length)];
        console.log(gachaRankR);
        _coin = currentID.coin - 50;
        const update = { coin: _coin };
        let user = await User.findOneAndUpdate(filter, update, {
          new: true,
        });
        return res.status(resStatus).send({ resMessage });
      }
    }

    return res.status(400).json({ message: "Your coin isn't enoght" });
  }
});

app.post("/silver", async (req, res) => {
  let resStatus = 200;
  let resMessage = "Success";
  let _username = req.body.username || "";
  let _coin = req.body.coin;
  let _item = req.body.item;
  let _rank = req.body.rank;
  const filter = { username: _username };
  if (_username === "") {
    resStatus = 400;
    resMessage = "bad request";
    res.status(resStatus).send({ resMessage });
  }

  let currentID = await User.findOne({
    username: _username,
  });
  if (currentID === null) {
    console.log("NULL!!");
    let resStatus = 400;
    let resMessage = "Login Failed";
    return res.status(resStatus).send({ resMessage });
  } else {
    if (currentID.coin > 100) {
      let gachaitem = await Gacha.find({
        rank: _rank,
        item: _item,
      });
      console.log(currentID.coin);
      var random = Math.floor(Math.random() * 100);
      if (random <= 80) {
        _rank = "N";
        let resStatus = 200;
        let resMessage = " You've got a Rank N";
        let gachaRankN = await Gacha.find({
          rank: _rank,
        });
        const Nrand = gachaRankN[Math.floor(Math.random() * gachaRankN.length)];
        console.log(Nrand, gachaRankN[Nrand]);
        return res.status(resStatus).send({ resMessage });
      } else if (random > 80 && random <= 95) {
        _rank = "R";
        let resStatus = 200;
        let resMessage = " You've got a Rank R";
        let gachaRankR = await Gacha.find({
          rank: _rank,
        });
        const Rrand = gachaRankR[Math.floor(Math.random() * gachaRankR.length)];
        console.log(Rrand, gachaRankR[Rrand]);
        return res.status(resStatus).send({ resMessage });
      } else if (random > 70) {
        _rank = "SR";
        let resStatus = 200;
        let resMessage = " You've got a Rank SR";
        let gachaRankSR = await Gacha.find({
          rank: _rank,
        });
        const SRrand =
          gachaRankSR[Math.floor(Math.random() * gachaRankSR.length)];
        console.log(SRrand, gachaRankSR[SRrand]);
        return res.status(resStatus).send({ resMessage });
      }
    }

    return res.status(400).json({ message: "Your coin isn't enoght" });
  }
});

app.post("/silver", async (req, res) => {
  let resStatus = 200;
  let resMessage = "Success";
  let _username = req.body.username || "";
  let _coin = req.body.coin;
  let _item = req.body.item;
  let _rank = req.body.rank;
  const filter = { username: _username };
  if (_username === "") {
    resStatus = 400;
    resMessage = "bad request";
    res.status(resStatus).send({ resMessage });
  }

  let currentID = await User.findOne({
    username: _username,
  });
  if (currentID === null) {
    console.log("NULL!!");
    let resStatus = 400;
    let resMessage = "Login Failed";
    return res.status(resStatus).send({ resMessage });
  } else {
    if (currentID.coin > 100) {
      let gachaitem = await Gacha.find({
        rank: _rank,
        item: _item,
      });
      console.log(currentID.coin);
      var random = Math.floor(Math.random() * 100);
      if (random <= 80) {
        _rank = "N";
        let resStatus = 200;
        let resMessage = " You've got a Rank N";
        let gachaRankN = await Gacha.find({
          rank: _rank,
        });
        const Nrand = gachaRankN[Math.floor(Math.random() * gachaRankN.length)];
        console.log(Nrand, gachaRankN[Nrand]);
        return res.status(resStatus).send({ resMessage });
      } else if (random > 80 && random <= 95) {
        _rank = "R";
        let resStatus = 200;
        let resMessage = " You've got a Rank R";
        let gachaRankR = await Gacha.find({
          rank: _rank,
        });
        const Rrand = gachaRankR[Math.floor(Math.random() * gachaRankR.length)];
        console.log(Rrand, gachaRankR[Rrand]);
        return res.status(resStatus).send({ resMessage });
      } else if (random > 95 && random <= 98) {
        _rank = "SR";
        let resStatus = 200;
        let resMessage = " You've got a Rank SR";
        let gachaRankSR = await Gacha.find({
          rank: _rank,
        });
        const SRrand =
          gachaRankSR[Math.floor(Math.random() * gachaRankSR.length)];
        console.log(SRrand, gachaRankSR[SRrand]);
        return res.status(resStatus).send({ resMessage });
      }
      _rank = "UR";
      let resStatus = 200;
      let resMessage = " You've got a Rank UR";
      let gachaRankSR = await Gacha.find({
        rank: _rank,
      });
      const URrand =
        gachaRankUR[Math.floor(Math.random() * gachaRankUR.length)];
      console.log(URrand, gachaRankUR[URrand]);
      return res.status(resStatus).send({ resMessage });
    }

    return res.status(400).json({ message: "Your coin isn't enoght" });
  }
});

module.exports = app;
