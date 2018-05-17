const express = require('express')
const setConfig = require('./setConfig')
const app = express()
const auth = require('./auth')
const usersCollection = require('./db/users')

setConfig(app)

app.set('port', process.env.PORT || 3000)

app.get('/logout', (req, res) => {
  req.session.destroy()
  req.redirect('/login')
})

app.get('/login', auth.isLogged(), (req, res) => {
  res.send(usersCollection.find())
})

app.post('/login', (req, res) => {
  
  let username = req.body.username
  let password = req.body.password

  if (!username || !password) {
    throw new Error('the data was not sent')
  }

  let user = usersCollection.findOne({username: username, password: password})

  if (!user) {
    return res.send('User not registered')
  }

  res.redirect('/profile')

})

app.post('/register', (req, res) => {

  let username = req.body.username
  let password = req.body.password

  if (!username || !password) {
    throw new Error('the data was not sent')
  }

  let user = usersCollection.findOne({username: username, password: password})

  if (!user) {
    user = usersCollection.insert({username: username, password: password})
  }

  req.session.user = user.username

  res.redirect('/profile')

})

app.get('/register', auth.isLogged({successRedirect: '/profile'}), (req, res) => {
  res.send('Do the account')
})

app.get('/profile', auth.shouldBeLogged({failureRedirect: '/login'}), (req, res) => {
  res.send('Hello you are logged')
})

app.use((req, res, next) => {
  res.sendStatus(404)
})

app.listen(app.get('port'), () => {
  console.log(`[application] running http server on port ${app.get('port')}`)
})