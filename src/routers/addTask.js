const express = require('express')
const router = express.Router()
const addTask = require('../db/redis/addTask')
const getIDTask = require('../db/redis/getIDTask')
const verifyToken = require('../middleware/verifyToken')
const verifyTask = require('../middleware/verifyTask')
  
router.post('/task', verifyToken, verifyTask, async (req, res) => {
  
  let user = req.body.decodedToken
  let task = req.body.task
  let id
  try {
    task.id  = await getIDTask(user.username)
    id = task.id
  } catch (e) {
    return res.send({error:true, message: e.message})
  }

  task = JSON.stringify(task)
  await addTask(user.username, id, task)
  res.send({error: false, task: task})
  
})

module.exports = router