const Users = require('../models/userModels')
const userCtrl={
    register:(req,res)=>{
       res.json({msg:"This is controller"})
    }

}



module.exports=userCtrl