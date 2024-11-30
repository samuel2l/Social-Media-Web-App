const postRouter = require("express").Router()
const Post = require("../models/post")



postRouter.post("/new", async (req, res, next) => {
  try {
    // const {}
    const newPost = new Post(req.body);
    
    await newPost.save();
    res.status(200).json(newPost);
  } catch (e) {
    next(e)
  }
})

postRouter.get("/", async (req, res, next) => {
  try {

    const posts=await Post.find({}).populate('userId')
    console.log(posts)

    res.status(200).json(posts);
  } catch (e) {
    next(e)
  }
})

module.exports = postRouter
