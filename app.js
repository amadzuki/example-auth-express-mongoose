require("dotenv").config()

const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")

const rootMiddleware = require("./middlewares")
const authMiddleware = require("./middlewares/auth")
const usersMiddleware = require("./middlewares/users")
const todosMiddleware = require("./middlewares/todos")

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", rootMiddleware)
app.use("/auth", authMiddleware)
app.use("/users", usersMiddleware)
app.use("/todos", todosMiddleware)

module.exports = app
