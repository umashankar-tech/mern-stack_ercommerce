const router = require('express').Router()

const userCtrl = require('../Controller/userCtrl')

router.post('/register',userCtrl.register)
router.post('/ refreh_token',userCtrl.register.)


module.exports = router