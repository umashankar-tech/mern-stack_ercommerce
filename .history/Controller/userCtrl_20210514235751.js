const Users = require('../models/userModels')
const userCtrl={
    register:(req,res)=>{
        res.json({msg:"TestControllers"})
    }

}



module.exports=userCtrl