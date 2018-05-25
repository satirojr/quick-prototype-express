const connection = require('./connection')

const getIDTask = async function getIDTask () {

  let id = await connection.incr('task:id')

  if ( id === null ) {
    await connection.set('task:id', 0)
    return 0
  }

  
  return id;

}

module.exports = getIDTask