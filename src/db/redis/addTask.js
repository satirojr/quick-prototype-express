const connection = require('./connection')
const idTaks = require('./idtask')

const addTask = async function addTask (username, task) {
  id = await idTaks(username)
  await connection.hset(`${username}:tasks`, `task:${id}`, task)
}

module.exports = addTask