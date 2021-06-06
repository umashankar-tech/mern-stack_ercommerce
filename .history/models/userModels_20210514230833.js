const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:tru
    }

})
module.exports = mongoose.model('Users',userSchema)