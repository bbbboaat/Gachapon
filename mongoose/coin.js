const mongoose = require("mongoose");

const CoinSchema = new mongoose.Schema({
  coin: Number,
});

const Coin = mongoose.model("coin", CoinSchema);

module.exports = Coin;
