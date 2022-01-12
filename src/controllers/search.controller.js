const express = require("express");

const router = express.Router();

const Search = require("../models/search.model");

router.get("/" , async (req , res ) => {
  try{

    const search = await Search.find({}).lean().exec();
   
    return res.status(200).json(search);
  }catch(e){
    return res.status(500).json({message: e.message});
  }    
});
 module.exports = router;