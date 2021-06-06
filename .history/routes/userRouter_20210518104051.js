const router = require('express').Router()

const userCtrl = require('../Controller/userCtrl')

router.post('/register',userCtrl.register)
router.post('/ refrehtoken',userCtrl.register)


module.exports = router