const express = require("express")
const router = express.Router()

const auth = require("./controllers")

router.post("/register", auth.isRegistered, auth.register)

module.exports = router
