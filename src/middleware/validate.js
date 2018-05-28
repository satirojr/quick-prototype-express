const validate = function validate (req, res, next) {

  if (typeof req.body.username !== 'string' || /^[a-zA-Z]+[0-9]*$/.test(req.body.username) !== true) {
    return res.send({error: true, message: 'Username should contain only letters, optionally following by numbers!'})
  }
  
  if (typeof req.body.password !== 'string'  ) {
    return res.send({error: true, message: 'Password must be a string!'})
  }

  if (req.body.password.length < 8) {
    return res.send({error: true, message: 'Password must have at least eight characters'})
  }

  req.body.username = req.body.username.toLowerCase()
  req.body.password = req.body.password.toLowerCase()

  next()
  
}

module.exports = validate