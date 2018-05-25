const usersCollection = require('../db/redis/find')
var jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const addTask = require('../db/redis/addTask')
const connection = require('../db/redis/connection')
  
router.post('/task', (req, res) => {

  if (req.body.token == 'underfined') {
    res.send({error:true, message: 'Send the token!'})
  }

  if (req.body.task == 'underfined') {
    res.send({error:true, message: 'Send the task!'})
  }

  const token = req.body.token

  jwt.verify(token, process.env.SECRETJWT, async (err, user) => {
    if (err) {
      res.send({error:true, message: 'Invalid token!'})
      return 
    }
    addTask(user.username, req.body.task)
  })

  res.send({error: false, task: req.body.task})
})

module.exports = router