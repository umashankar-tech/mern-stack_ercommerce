const router = require('express').Router()

const userCtrl = require('../Controller/userCtrl')

router.post('/register',userCtrl.register)
router.post('/refresh_token',userCtrl.register.refrehToken)


module.exports = router