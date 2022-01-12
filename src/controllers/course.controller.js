const express = require("express");

const router = express.Router();

const Course = require("../models/course.model");

router.get("/course1" , async (req , res ) => {
  try{ 
    const courses = await Course.find().limit(12).lean().exec();
    return res.status(200).json(courses);
  }catch(e){
    return res.status(500).json({message: e.message});
  }
      
   });

   router.get("/course2" , async (req , res ) => {
    try{ 
      const courses = await Course.find().skip(12).limit(12).lean().exec();
      return res.status(200).json(courses);
    }catch(e){
      return res.status(500).json({message: e.message});
    }
        
     });

     router.get("/course3" , async (req , res ) => {
      try{ 
        const courses = await Course.find().skip(24).limit(12).lean().exec();
        return res.status(200).json(courses);
      }catch(e){
        return res.status(500).json({message: e.message});
      }
          
       });

       router.get("/course4" , async (req , res ) => {
        try{ 
          const courses = await Course.find().skip(36).limit(12).lean().exec();
          return res.status(200).json(courses);
        }catch(e){
          return res.status(500).json({message: e.message});
        }
            
         });


 module.exports = router;