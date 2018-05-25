const connection = require('./connection')
const getIDTask = require('./getIDTask')

const addTask = async function addTask (username, task) {
  id = await getIDTask(username)
  await connection.hset(`${username}:tasks`, `task:${id}`, task)
}

module.exports = addTask