const Users = require('../models/userModels')
const userCtrl={
    register: aysnc(req,res)=>{
       res.json({msg:"This is controller"})
    }

}



module.exports=userCtrl