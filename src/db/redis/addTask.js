const connection = require('./connection')

const addTask = async function addTask (username, id, task) {
  
  await connection.hset(`${username}:tasks`, `task:${id}`, task)

}

module.exports = addTask