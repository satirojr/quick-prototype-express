const getTasks = require('../db/redis/find')
const verifyToken = require('../middleware/verifyToken')
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()

router.post('/tasks', verifyToken, async (req, res) => {
  
  if (req.body.token == undefined) {
    res.send({error:true, message: 'Missing token!'})
  }
  
  const token = req.body.token

  let user
  let tasks
  let taskList = []

  try {
    user = await jwt.verify(token, process.env.SECRETJWT)
  } catch (e) {
    res.send({error: true, message: e.message})
  }

  try {
    tasks = await getTasks(`${user.username}:tasks`)
    Object.keys(tasks).forEach(function(task) {
        taskList.push(JSON.parse(tasks[task]))
    })    
    res.send(taskList)
    return
  }catch (e) {
    res.send({error: true, message: 'The user has no task!'})
  }

})

module.exports = router