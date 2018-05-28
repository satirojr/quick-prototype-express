const connection = require('./connection')

const getIDTask = async function getIDTask (username) {

  const key = `${username}:task:id`

  let id = await connection.get(key)

  if ( id === null ) {
    await connection.set(key, 1)
    id = await connection.get(key)
  }
  
  await connection.incr(key)
  return id;

}

module.exports = getIDTask