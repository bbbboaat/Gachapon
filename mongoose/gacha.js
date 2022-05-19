const mongoose = require("mongoose");

const Gachaschema = new mongoose.Schema({
  gname: String,
  item: String,
  rank: String,
});

const Gacha = mongoose.model("Gacha", Gachaschema);

module.exports = Gacha;
