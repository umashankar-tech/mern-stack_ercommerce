const Users = require('../models/userModels')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userCtrl={
    register: async (req,res)=>{
        try {
            const{name,email,password} = req.body;

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({mg:"The mail already exits"})

            if(password.length<6)
             return res.status(400).json({msg:"Password i at least 6 character long."})
            

             //Password Encryption
             const passwordHash = await bcrypt.hash(password,10)
             const newUser = new Users({
                 name,email,password:passwordHash
             })
             //save to mongodb
             await newUser.save()

             //Then create jonwebtoken to implement authentication
             const accesstoken = createAccessToken({id:newUser._id})
           

             res.json({accesstoken})
        } catch (err) {
            return res.status(500).json({msg:err.message})
            
            
        }
       
    }


}

const createAccessToken = (user)=>{
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'})
}



module.exports=userCtrl 