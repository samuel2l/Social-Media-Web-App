const postRouter = require("express").Router()
const Post = require("../models/post")

postRouter.get("/", (req, res) => {
  res.send("post routes")
});
module.exports = postRouter
