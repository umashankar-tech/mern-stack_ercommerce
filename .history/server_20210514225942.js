require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles:true
}))

//connect to mongodb
const URI = "MONGODB_URL = mongodb+srv://umashankardot:vustech9600@cluster0.pgq4b.mongodb.net/ecommerce?retryWrites=true&w=majority"
mongoose.connect(URI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
},err=>{
    if(err)throw err;
    console.log('Connected to MongoDB')
})

app.get('/',(req,res)=>{
    res.json({msg:"welcome to ecommerce site"})
})

const PORT = process.env.PORT||5000
app.listen(PORT,()=>{
    console.log('server is running on port',PORT)
})

