const auth = require('../auth')
const usersCollection = require('../db/db')
const express = require('express')
const router = express.Router()

router.get('/register', auth.isLogged({successRedirect: '/profile'}), (req, res) => {
    console.log(process.pid)
    res.send('Do an account')
})

router.post('/register', (req, res) => {

    let username = req.body.username
    let password = req.body.password
  
    if (!username || !password) {
      throw new Error('the data was not sent')
    }
  
    let user = usersCollection.find({username: username, password: password})
  
    if (!user) {
      user = usersCollection.create({username: username, password: password})
    }
  
    req.session.user = user.username
  
    res.redirect('/profile')
  
})
  
module.exports = router