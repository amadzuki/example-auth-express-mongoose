const mongoose = require("mongoose")

const MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://localhost:27017/database_name`

mongoose.set("useCreateIndex", true)
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = mongoose
