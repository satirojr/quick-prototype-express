const verifyTask = function verifyTask (req, res, next) {
  if (typeof req.body.task !== 'object') {
    return res.send({error: true, message: 'Waiting the type object for Task!'})
  }
  next()
}

module.exports = verifyTask