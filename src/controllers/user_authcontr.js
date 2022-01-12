const { body, validationResult } = require('express-validator');
var fs=require("fs");
const user_model = require("../models/user_mod");
var jwt = require('jsonwebtoken');
//const router = require("./post_contr");

let newToken=(user)=>{
    return jwt.sign({ user:user },"ssss");
}

const Register=async(req,res)=>{
    //console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let new_error=errors.array().map(({msg,param,location})=>{
            return {
                [param]:msg,
            }
        })
        return res.status(400).json({ errors: errors.array() });
}
console.log(req.body.email)
    let user=await  user_model.findOne({email:req.body.email});
    console.log(user);
    if(user){
        return res.status(400).json({
            status: "failed",
            message: "  different email address",
          });
    }
   
    user= await user_model.create(req.body);
    let token=newToken(user);
    res.status(201).json({user,token});
};

const login=async(req,res)=>{
    let user=await  user_model.findOne({username:req.body.username});
   // console.log(user)
    if(!user){
        return res.status(400).json({
            status: "failed",
            message: " Please provide a different email address",
          });
    // res.send("please provide valid email id")
    }
   // console.log(req.body.password);
    const match = await user.checkPassword(req.body.password)
if(!match){
    return res.status(400).json({
        status: "failed",
        message: " password is not matched",
      });
   // res.send("password is not matched")
}

    let token=newToken(user);
    res.status(201).json({user,token});
};
const allUser= async(req,res)=>{
 let all=await  user_model.find();
 res.status(201).json({ all });
}

module.exports={Register,login,newToken,allUser};
