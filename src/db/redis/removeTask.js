const connection = require('./connection')

const removeTask = async function removeTask (username, id) {
  let exists = await connection.exists(`${username}:tasks`) 
  if (typeof exists === 'number' && exists === 0) {
    throw new Error('Task not exists!')
  }
  await connection.hdel(`${username}:tasks`, `task:${id}`)
}

module.exports = removeTask