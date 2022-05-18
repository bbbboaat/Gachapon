const express = require ('express');
const { MongoClient } = require('mongodb');
const app = express ();
const PORT = 3000;
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://boat:<password>@cluster0.0pjc1.mongodb.net/test',()=>{
    console.log("connect database")
})

app.get('/',function(req,res){
    res.send("Hello World");

});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
});