const shouldBeLogged = function shouldBeLogged (options) {
  
  return function (req, res, next) {
    
    let session = req.session

    if (!session.user) {
      try {
        return res.redirect(options.failureRedirect)
      } catch (e) {
        throw new Error('Missing the field failureRedirect in options')
      }
    }

    next()

  }

}

const isLogged = function isLogged (options) {
  
  return function (req, res, next) {
    
    let session = req.session

    if (session.user) {
      try {
        return res.redirect(options.successRedirect)
      } catch (e) {
        throw new Error('Missing the field successRedirect in options')
      }
    }

    next()

  }

}


module.exports.isLogged = isLogged
module.exports.shouldBeLogged = shouldBeLogged