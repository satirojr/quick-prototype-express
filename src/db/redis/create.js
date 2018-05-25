const connection = require('./connection')

const create = async function create (key, user) {
  var exists
  exists = await connection.exists(key)
  if (typeof exists === 'number' && exists === 1 ) {
    throw new Error('User already exists!')
  }
  
  return await connection.hmset(key, user)
}

module.exports = create
