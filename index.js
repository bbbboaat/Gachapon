const express = require("express");
const parser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const User = require("./mongoose/user");
const tokenModel = require("./mongoose/user");
const bodyParser = require("body-parser");

const rand = function() {
    return Math.random().toString(36).substr(2);

};

const tokenGen = function () {
    return rand() + rand ();
}

app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://boat:boat@cluster0.0pjc1.mongodb.net/test",
  () => {
    console.log("connect database");
  }
);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/register", async (req, res) => {
  console.log("success");

  let resStatus = 200;
  let resMessage = "Success";

  let _username = req.body.username || "";
  let _password = req.body.password || "";
  let _role = req.body.role || "";
  let _tier = req.body.tier || "";

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
  });
  await newUser.save()

  res.status(resStatus).send({ resMessage });
});

app.post("/login", async (req, res) => {
  let resStatus = 200;
  let resMessage = "Success";
  let _username = req.body.username || "";
  let _password = req.body.password || "";

  let usernameid = await User.findOne({
    username: _username,
    password: _password
  });

  console.log(`username : ${_username} , password : ${_password}`)
  if (usernameid === null) {
    console.log("NULL!!");
    let resStatus = 400;
    let resMessage = "Login Failed";
    res.status(resStatus).send({ resMessage });
  }else {
      console.log(usernameid);
    
      await tokenModel.deleteMany({ userId: usernameid._id });
      let newToken = tokenModel({
        tokenString: tokenGen(),
        userId: usernameid._id,
      });
      await newToken.save();
  }

});
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
