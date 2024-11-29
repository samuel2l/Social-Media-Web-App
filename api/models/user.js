const mongooose = require("mongoose")

const userSchema = mongooose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      max: 24,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    displayPicture: {
      type: String,
      default: "",
    },
    bannerPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    bio:{
        type:String,
        max:50,
    },
    location:{
        type:String
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)
const User = mongooose.model("User", userSchema)
module.exports = User
