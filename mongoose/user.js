const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    username : String,
    password : String,
    role : String,
    tier : String, 
});

const User = mongoose.model('Login', Userschema);

module.exports = User


