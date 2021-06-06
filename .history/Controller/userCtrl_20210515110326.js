const Users = require('../models/userModels')
const userCtrl={
    register: async (req,res)=>{
        try {
            const{name,email,password} = req.body;

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({mg:"The mail already exits"})

            if
            
        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
       
    }

}



module.exports=userCtrl