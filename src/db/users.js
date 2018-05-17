const loki = require('lokijs')

const db = new loki('db/database.json', {
  autosave:true
})

const users = function users () {
  var users
  if (!db.getCollection('users')) {
    users = db.addCollection('users')
  } else {
    users = db.getCollection('users')
  }
  return users
}

module.exports = users()


