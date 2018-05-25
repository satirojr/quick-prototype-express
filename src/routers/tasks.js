const usersCollection = require('../db/redis/find')
var jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
  
router.post('/tasks', (req, res) => {

  if (req.body.token == 'underfined') {
    res.send({error:true})
  }
  
  const token = req.body.token

  jwt.verify(token, process.env.SECRETJWT, function(err, user) {
    usersCollection(`${user.username}:tasks`).then((tasks) => {
      userTasks = []
      Object.keys(tasks).forEach(function(element) {
        userTasks.push(tasks[element])
      })
      res.send(userTasks)
    }).catch(() => {
      res.send({error: true, message: 'token inválido!'})
    })
  })

})

module.exports = router