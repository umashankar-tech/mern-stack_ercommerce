const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type
    }

})
module.exports = mongoose.model('Users',userSchema)