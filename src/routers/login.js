const find = require('../db/redis/find')
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
  
router.post('/login', async (req, res) => {

    let username = req.body.username
    let password = req.body.password

    if (!username || !password) {
        throw new Error('the data was not sent')
    }

    var user

    try {
        user = await find(username)
    } catch (e) {
        return res.send({ error: true, message: e.message })
    }

    const token = jwt.sign({
        username: user.username
    }, process.env.SECRETJWT, { expiresIn: '24h' })

    res.send({ token: token, error: false })

})

module.exports = router