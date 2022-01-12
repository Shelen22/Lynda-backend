const express=require("express");
const mongoose=require("mongoose");
var bcrypt = require('bcryptjs');

const userSchema=new mongoose.Schema({
  email:{type:String,require:true,unique:true},
  username:{type:String,require:true,unique:true},
  password:{type:String,require:true}
   
},
{
  versionKey: false,
  timestamps: true,
}
);

userSchema.pre("save",function(next){
  if(!this.isModified("password")){
     return next();
  }
//  console.log(this.password)  
//bcrypt.genSalt(10, function(err, salt) {
//console.log(this.password)
bcrypt.hash(this.password, 10, (err, hash) => {
  this.password = hash;
 //console.log(hash)
      // Store hash in your password DB.
      //this.password=hash;
      return next();
});
});

userSchema.methods.checkPassword = function (password){
  return new Promise((resolve, reject) => {
    console.log(this.password)
    bcrypt.compare(password,this.password, function (err, same) {
      if (err){

      return reject(err);
      }
     return  resolve(same);
    });
  });
};

module.exports=mongoose.model("lynda_user",userSchema);