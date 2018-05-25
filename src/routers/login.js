const find = require('../db/redis/find')
const jwt = require('jsonwebtoken')
const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
  
router.post('/login', async (req, res) => {

    let username = req.body.username
    let password = req.body.password

    if (!username || !password) {
        throw new Error('the data was not sent')
    }

    let user

    try {
        user = await find(username)
        if (!bcrypt.compareSync(password, user.password)) {
            throw new Error('Incorrect password!')
        }
    } catch (e) {
        return res.send({ error: true, message: 'User not found!' })
    }

    const token = jwt.sign({
        username: user.username
    }, process.env.SECRETJWT, { expiresIn: '24h' })

    res.send({ token: token, error: false })

})

module.exports = router