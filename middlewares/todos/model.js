const mongoose = require("../../config/mongoose")

const Todo = mongoose.model("Todo", {
  id: Number,
  text: String,
  isFavorited: Boolean,
  isDone: Boolean,
})

module.exports = Todo
