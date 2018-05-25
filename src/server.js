const express = require('express')
const setConfig = require('./setConfig')
const app = express()
const auth = require('./auth')
const login = require('./routers/login')
const tasks = require('./routers/tasks')
const task = require('./routers/task')
const register = require('./routers/register')

setConfig(app)

app.set('port', process.env.PORT || 3000)

app.use(express.static(__dirname + '/dist'))

app.use('/', login)

app.use('/', register)

app.use('/', tasks)

app.use('/', task)


app.use((req, res, next) => {
  res.send({statusCode:404, error: true})
})

app.listen(app.get('port'), () => {
  console.log(`[application] running http server on port ${app.get('port')}`)
})
