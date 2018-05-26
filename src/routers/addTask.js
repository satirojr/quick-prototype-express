const usersCollection = require('../db/redis/find')
var jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const addTask = require('../db/redis/addTask')
const getIDTask = require('../db/redis/getIDTask')
const connection = require('../db/redis/connection')
  
router.post('/task', (req, res) => {

  if (req.body.token === undefined) {
    return res.send({error:true, message: 'Send the token!'})
  }

  if (req.body.task === undefined) {
    return res.send({error:true, message: 'Send the task!'})
  }
  
  const token = req.body.token
  let task 

  jwt.verify(token, process.env.SECRETJWT, async (err, user) => {
    if (err) {
      return res.send({error:true, message: 'Invalid token!'})
    }
    let id = await getIDTask(user.username)
    id = parseInt(id)
    try {
      task = JSON.parse(req.body.task)
      task.id = id
      task = JSON.stringify(task)
    } catch (e) {
      return res.send({error: true, message:'Invalid JSON!'})
    }
    await addTask(user.username, id, task)
    res.send({error: false, task: task})
  })
  
})

module.exports = router