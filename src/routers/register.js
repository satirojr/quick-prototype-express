const auth = require('../auth')
const usersCollection = require('../db/users')
const express = require('express')
const router = express.Router()

router.get('/register', auth.isLogged({successRedirect: '/profile'}), (req, res) => {
    res.send('Do the account')
})

router.post('/register', (req, res) => {

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
  
module.exports = router