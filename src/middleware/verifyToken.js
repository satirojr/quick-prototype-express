const jwt = require('jsonwebtoken')

const verifyToken = function verifyToken (req, res, next) {

  if (typeof req.body.token !== 'string') {
    return res.send({error:true, message: 'Send the token!'})
  }

  jwt.verify(req.body.token, process.env.SECRETJWT, async (err, decodedToken) => {

    if (err) {
      return res.send({error:true, message: 'Invalid token!'})
    }

    req.body.decodedToken = decodedToken 

    next()

  })

}

module.exports = verifyToken