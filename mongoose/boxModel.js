const mongoose = require("mongoose");

const boxGachaschema = new mongoose.Schema({
  bronzeBox: String,
  silverBox: String,
  goldBox: String,
});

const  = mongoose.model("boxGacha", boxGachaschema);

module.exports = boxGacha;
