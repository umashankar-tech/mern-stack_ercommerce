const Users = require('../models/userModels')
const userCtrl={
    register: async(req,res)=>{
       try {
           const{name,email,password}=req.body;
           const user = await Users.findOne({email})


           if(user)return res.status(400).json({msg:"the email is already exist"})
           
           if(password.length < 6)
             return res.status(400).json({mag:"Pasword is at least 6 character long."})
           
       } catch (error) {
           return res.status(500).json({msg:error.message})
           
       }
    }

}



module.exports=userCtrl