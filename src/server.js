const express = require('express')
const setConfig = require('./setConfig')
const app = express()
const auth = require('./auth')
const usersCollection = require('./db/users')
const login = require('./routers/login')
const register = require('./routers/register')

setConfig(app)

app.set('port', process.env.PORT || 3000)

app.get('/logout', (req, res) => {
  req.session.destroy()
  req.redirect('/login')
})

app.use('/', login)

app.use('/', register)

app.get('/profile', auth.shouldBeLogged({failureRedirect: '/login'}), (req, res) => {
  res.send('Hello you are logged')
})

app.use((req, res, next) => {
  res.sendStatus(404)
})

app.listen(app.get('port'), () => {
  console.log(`[application] running http server on port ${app.get('port')}`)
})