const Users = require('../models/userModels')
const userCtrl={
    register:(req,res)=>{
       try {
           const{name,email,password}=req.body;
           
           
       } catch (error) {
           return res.status(500).json({msg:error.message})
           
       }
    }

}



module.exports=userCtrl