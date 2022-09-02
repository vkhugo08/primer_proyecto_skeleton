const router = require('express').Router()
const {login} = require('./auth.http')

router.post ('/login', login)
    

exports.router = router   
