const mongoose = require('mongoose');

const db=()=>{
    mongoose.connect('mongodb://localhost:27017/BOOKS_CRUD').then(()=>{
      console.log("DB connected...");
    }).catch((err)=>{
      console.log("err=> ",err);
    })
}

module.exports=db;