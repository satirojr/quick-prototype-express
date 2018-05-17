const auth = require('../auth')
const usersCollection = require('../db/db')
const express = require('express')
const router = express.Router()

router.get('/login', auth.isLogged(), (req, res) => {
    res.send('You are not logged')
})
  
router.post('/login', (req, res) => {

    let username = req.body.username
    let password = req.body.password

    if (!username || !password) {
        throw new Error('the data was not sent')
    }

    let user = usersCollection.findOne({username: username, password: password})

    if (!user) {
        return res.send('User not registered')
    }

    req.session.user = user.username

    res.redirect('/profile')

})

module.exports = router