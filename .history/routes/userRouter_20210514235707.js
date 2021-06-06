const router = require('express').Router()
const Users = require('../models')
const userCtrl = require('../Controller/userCtrl')

router.post('/register',userCtrl.register)

module.exports = router