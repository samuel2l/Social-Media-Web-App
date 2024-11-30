const mongooose = require("mongoose")
const User=require('./user')
const postSchema = mongooose.Schema(
  {
    userId: {

      required: true,
       type: mongooose.Schema.Types.ObjectId, ref: 'User' ,
    },
    caption: {
      type: String,
      max: 800
    },
    image: {
      type: String,

    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
)
const Post = mongooose.model("Post", postSchema)
module.exports = Post
