const bcrypt = require('bcryptjs')
const create = require('../db/redis/create')
const validate = require('../middleware/validate')
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.post('/register', validate, async (req, res) => {

  let username = req.body.username
  let password = req.body.password
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt)
  
  try {
    await create(username, { username: username, password: hash })
  } catch (e) {
    return res.send({ error: true, message: e.message })
  }
  const token = jwt.sign({
    username: username
  },process.env.SECRETJWT, { expiresIn: '24h' })

  return res.send({ error: false, token: token })

})
  
module.exports = router
