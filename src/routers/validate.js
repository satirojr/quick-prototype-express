const validate = function validate (req, res, next) {

  if (req.body.username == null || req.body.password == null) {
    return res.send({error: true, message: 'Send all the fields!'})
  }
  
  if (/^[a-zA-Z]+[0-9]*$/.test(req.body.username) !== true || req.body.password.length < 8 ) {
    return res.send({error: true, message: 'Invalid arguments!'})
  }

  req.body.username = req.body.username.toLowerCase()
  req.body.password = req.body.password.toLowerCase()

  next()
  
}

module.exports = validate