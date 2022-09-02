const router = require('express').Router()
const passport = require('passport')
require('../middleware/auth.middleware')(passport)
const {getAllP,registerPost, getByIdP} = require('./posts.http')

router.route('/posts')
    .get(getAllP)
    .post(registerPost)

router.get('/posts/:id', getByIdP )
    
exports.router = router
