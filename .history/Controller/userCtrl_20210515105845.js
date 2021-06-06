const Users = require('../models/userModels')
const userCtrl={
    register: async (req,res)=>{
        try {
            const{name,email,password}
            
        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
       
    }

}



module.exports=userCtrl