const mongoose = require('mongoose')

const data_R_schema = new mongoose.Schema({
    img:{type:String , required:true},
    title:{type:String , required:true},
    author:{type:String , required:true}
})

module.exports = mongoose.model('data_R',data_R_schema)