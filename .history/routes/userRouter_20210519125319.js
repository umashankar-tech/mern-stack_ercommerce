const router = require('express').Router()


const userCtrl = require('../Controller/userCtrl')

router.post('/register',userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor', auth,  userCtrl.getUser)



module.exports = router