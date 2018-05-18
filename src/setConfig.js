const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session')
const bodyParser = require('body-parser')
const store = require('connect-loki')(session)

const setConfig = function setConfig (app) {
  
  app.use(bodyParser.json())

  app.use(bodyParser.urlencoded({ extended: true }))
  
  app.use(cors())
  
  app.use(morgan('tiny'))
  
  app.use(session({
    store: new store({
      ttl: 60000 * 60 * 24 // one day
    }),
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: { 
      maxAge:  60000 * 60 * 24, //  one day
      httpOnly: true
    },
  }))
  
  app.use((req, res, next) => {
    res.removeHeader('X-Powered-By')
    next()
  })
  
}

module.exports = setConfig
