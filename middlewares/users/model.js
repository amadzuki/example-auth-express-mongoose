const mongoose = require("../../config/mongoose")

const AutoIncrement = require("mongoose-sequence")(mongoose)

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      min: [2, "Name is too short"],
      max: [50, "Name is too long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      min: [6, "Email is too short"],
    },
    salt: {
      type: String,
      required: [true, "Salt is required"],
    },
    hash: {
      type: String,
      required: [true, "Hash is required"],
    },
  },
  {
    timestamps: true,
  }
)

UserSchema.plugin(AutoIncrement, { inc_field: "id" })

const User = mongoose.model("User", UserSchema)

module.exports = User
