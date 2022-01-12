const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    title: {type:String , required:true},
    name: {type:String , required:true},
    by: {type:String , required:true},
    date: {type:String , required:true},
    img: {type:String , required:true},
    link: {type:String , required:true},
    time: {type:Number, required:true},
    price: {type:Number , required:true}
  
},
{
versionKey:false,
timestamps:true
});

module.exports = mongoose.model("course" , courseSchema);