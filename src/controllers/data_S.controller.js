const express = require("express");

const router = express.Router();

const data_S = require("../models/data_S.model");

router.get("/" , async (req , res ) => {
  try{
    const respo = await data_S.find({}).lean().exec();
    return res.status(200).json(respo);
  }catch(e){
    return res.status(500).json({message: e.message});
  }    
});
 module.exports = router;