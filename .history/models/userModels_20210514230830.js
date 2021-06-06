const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim
    }

})
module.exports = mongoose.model('Users',userSchema)