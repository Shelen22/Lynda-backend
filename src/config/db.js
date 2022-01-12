 const mongoose = require('mongoose');

 module.exports = ()=>{
     return mongoose.connect('mongodb+srv://Teamlynda:lynda22@cluster0.emdeu.mongodb.net/Lynda')
 }