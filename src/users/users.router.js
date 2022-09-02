  const router = require('express').Router()
  const passport = require('passport')
const {getAll, getById, register, remove, edit} = require('./users.http')
const { getByIdLogged, myEdit, myRemove,getLoggedPosted} = require('../posts/posts.http')

router.route('/')
    .get(getAll)
    .post(register)



router.route('/users/:id')
    .get(getById)
    .put(edit)
    .delete(remove)


router.route('/users/me/posts/:id')
  .get (passport.authenticate ('jwt', {session: false}), getByIdLogged)
  
router.route('/users/me/posts')
 .get ( passport.authenticate ('jwt', {session: false}), getLoggedPosted)
  .put( passport.authenticate ('jwt', {session: false}),myEdit)
 .delete( passport.authenticate ('jwt', {session: false}),myRemove)


exports.router = router     