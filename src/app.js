const express = require('express')
const passport = require('passport')
require('./middleware/auth.middleware')(passport)

const userRouter = require ('./users/users.router').router
const authRouter = require('./auth/auth.router').router
const postRouter = require('./posts/posts.router').router

const app = express()



app.use(express.json())

/*app.get('/', (req, res) => {
    res.status(200).json({mensajito:'Hello World!'})
})*/

app.use('/api/v1/users', userRouter )
app.use('/api/v1/auth', authRouter )
app.use('/api/v1/post', postRouter)

/*app.get('/ejem', passport.authenticate ('jwt', {session: false}) , (req, res) => {
    res.status(200).json({mensajito:'Hello Chabon, u r authorized !', email: req.user.email})
})*/

app.listen(8000, () => {
    console.log('Server running at http://localhost:8000')
})

exports.default = app
exports.app = app
module.exports = app