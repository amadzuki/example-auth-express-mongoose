const bcrypt = require("bcrypt")

const isPasswordCorrect = async (req, res, next) => {
  if (req.isRegistered) {
    const isCorrect = await bcrypt.compare(req.body.password, req.user.hash)

    if (isCorrect) {
      next()
    } else {
      res.status(400).send({
        message: "Password is incorrect",
      })
    }
  } else {
    res.send({
      message: "User is not registered yet",
      email: req.body.email,
    })
  }
}

module.exports = isPasswordCorrect
