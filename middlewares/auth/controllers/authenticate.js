const jwt = require("jsonwebtoken")

const authenticate = async (req, res) => {
  const payload = {
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
  }

  const accessToken = jwt.sign(payload, process.env.SECRET, {
    expiresIn: "2 days",
  })

  if (accessToken) {
    res.status(200).send({
      message: "User is successfully authenticated",
      accessToken: accessToken,
    })
  } else {
    res.status(500).send({
      message: "Authentication failed because token creation is failed",
    })
  }
}

module.exports = authenticate
