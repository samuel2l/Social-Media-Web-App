const mongooose = require("mongoose")

const postSchema = mongooose.Schema(
  {
    userId: {
      type: String,
      required: true,
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
