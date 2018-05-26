const remove = require('../db/redis/removeTask')
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()

router.post('/remove', (req, res) => {
  
  if (req.body.token == undefined) {
    return res.send({error:true, message: 'Send the token!'})
  }

  if (req.body.id == undefined) {
    return res.send({error:true, message: 'Send the task id!'})
  }

  const token = req.body.token

  jwt.verify(token, process.env.SECRETJWT, async (err, user) => {
    if (err) {
      return res.send({error: true, message: 'Invalid token!'})
    }
    try {
      let task = await remove(user.username, req.body.id)
      res.send({error: false, id: req.body.id})
    } catch (e) {
      res.send({error: true, message: e.message})
    }
  })

})

module.exports = router