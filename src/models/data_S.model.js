const mongoose = require('mongoose')

const data_S_schema = new mongoose.Schema({
    title:{type:String , required:true},
    introduction:{type:String , required:true},
    Getting_Started:[{type:String , required:true}],
    Basics:[{type:String , required:true}],
    Conclusions:[{type:String , required:true}],

})

module.exports = mongoose.model('data_S',data_S_schema)