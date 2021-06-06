const router = require('express').Router()
const UserCtrl = require('../Controller/')

router.post('/register',(req,res)=>{
    res.json({msg:"Test router"})
})

module.exports = router