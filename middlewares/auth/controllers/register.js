const User = require("../../users/model")
const bcrypt = require("bcrypt")

const register = async (req, res) => {
  if (req.isRegistered) {
    res.status(409).send({
      message: "The email has already been registered",
      email: req.body.email,
    })
  } else {
    const { name, email, password } = req.body

    const salt = await bcrypt.genSalt(10) // saltRounds
    const hash = await bcrypt.hash(password, salt)

    const user = {
      name: name,
      email: email,
      salt: salt,
      hash: hash,
    }
    await User.create(user)

    res.status(201).send({
      message: "User is successfully registered",
      user: {
        name: user.name,
        email: user.email,
      },
    })
  }
}

module.exports = register
