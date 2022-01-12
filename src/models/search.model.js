const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema({

    img: {type:String , required:true},
    name: {type:String , required:true},
    title: {type:String , required:true},
    p: {type:String , required:true},
    by: {type:String , required:true},
    view: {type:Number, required:true},
    price: {type:Number , required:true},
    date: {type:String , required:true},
  
},
{
versionKey:false,
timestamps:true
});

module.exports = mongoose.model("search" , searchSchema);