const connection = require('./connection')

const getIDTask = async function getIDTask (username) {

  let id = await connection.incr(`${username}:task:id`)

  if ( id === null ) {
    await connection.set(`${username}:task:id`, 0)
    id = await connection.incr(`${username}:task:id`)
  }

  return id;

}

module.exports = getIDTask