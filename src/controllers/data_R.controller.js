const express = require("express");

const router = express.Router();

const data_R = require("../models/data_R.model");

router.get("/" , async (req , res ) => {
  try{
    const respo = await data_R.find({}).lean().exec();
    return res.status(200).json(respo);
  }catch(e){
    return res.status(500).json({message: e.message});
  }    
});
 module.exports = router;