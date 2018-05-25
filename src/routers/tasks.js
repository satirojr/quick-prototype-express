const getTasks = require('../db/redis/find')
var jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
  
router.post('/tasks', async (req, res) => {

  if (req.body.token == 'underfined') {
    res.send({error:true})
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
    return res.send(taskList)
  }catch (e) {
    res.send({error: true, message: 'The user has no task!'})
  }

})

module.exports = router