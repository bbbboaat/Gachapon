const mongoose = require('mongoose')



const Gachaschema = new mongoose.Schema({
    Item : String,
    Rank : String 
});

const Gacha = mongoose.model('Login', Gachaschema);

module.exports = Gacha


