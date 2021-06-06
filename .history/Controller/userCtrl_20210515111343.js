const Users = require('../models/userModels')
const bcrypt = require('bcrypt')


const userCtrl={
    register: async (req,res)=>{
        try {
            const{name,email,password} = req.body;

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({mg:"The mail already exits"})

            if(password.length<6)
             return res.status(400).json({msg:"Password i at least 6 character long."})
            

             //Password Encryption

             
             res.json({msg:"Register Sucess "})
        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
       
    }

}



module.exports=userCtrl