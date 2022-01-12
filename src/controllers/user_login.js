const express=require("express");
const Login = require("../models/user_mod");
const { body,check, validationResult } = require('express-validator');
const fs=require("fs");
const path=require("path");
var bodyParser = require('body-parser');
const {Register,login,newToken,allUser}=require("./user_authcontr");
// const authenticate=require("../middleware/authenticate");
const router=express.Router();

const jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/signup",async function(req,res){
     const login  = await Login.find({}).lean().exec();
     return res.status(200).send(login);
  })

router.post("/Register",urlencodedParser,[
  body(("username")).notEmpty().withMessage("username is required"),
body(("email")).isEmail().withMessage("Please enter a proper email address"),
body(("password")).notEmpty().isStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1
})
.withMessage("Password must be greater than 6 and contain at least one uppercase letter, one lowercase letter, and one number")],Register,
async(req,res)=>{
  const errors = validationResult((req));
  console.log(errors.mapped());
  if (!errors.isEmpty()) {
      let new_error=errors.array().map(({msg,param,location})=>{
          return {
              [param]:msg,
          }
      })
      return res.status(400).json({ errors: errors.array() });
}
try{
    let users= await Login.create((req.body));
     return res.status(201).send(users);
}catch(e){
   return res.status(500).json({ message: e.message });
}
});
//body("username").notEmpty().withMessage("username is required"),body("password").notEmpty().isLength(6).isStrongPassword().withMessage("password is required"),
//login);
router.get("/data/login",login,async function(req,res){
  const username = await Login.find().lean().exec()
  return res.status(200).send(username)
   
    })
router.post("/data/login",urlencodedParser,[check("password","wrong pasword").isLength({min:5}),
check("username","enter username").isString()],login,
async(req,res)=>{
  const errors = validationResult((req));
  console.log(errors.mapped());
  if (!errors.isEmpty()) {
      let new_error=errors.array().map(({msg,param,location})=>{
          return {
              [param]:msg,
          }
      })
      return res.status(400).json({ errors: errors.array() });
}
 return res.status(200).send({username,token})
})


router.get("/data/authentication/whitebox",async function(req,res){
  return res.render("checkout");
    })
router.get("/data/authentication/qw",async(req,res)=>{
  try{
  res.render("checkoutfree");
  }catch(e){
    console.log("error",e);
  }
});
  router.post("/data/authentication/whitebox",urlencodedParser,async(req,res)=>{
    try{
    res.render("checkout");
    }catch(e){
      console.log("error",e);
    }
});
module.exports=router;