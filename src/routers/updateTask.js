const express = require('express')
const router = express.Router()
const updateTask = require('../db/redis/addTask')
const verifyToken = require('../middleware/verifyToken')
const verifyTask = require('../middleware/verifyTask')

router.post('/update', verifyToken, verifyTask, async (req, res) => {

  let user = req.body.decodedToken
  let task = req.body.task
  let id =  task.id
  task = JSON.stringify(task)

  await updateTask(user.username, id, task)
  res.send({error: false, task: task})

})

module.exports = router