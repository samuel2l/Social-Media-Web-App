const userRouter = require("express").Router()
const User = require("../models/user")
const Post=require("../models/post")
const print=console.log

//get user by username
userRouter.get("/profile/:username", async (req, res, next) => {
  try {
    print('inside the get profile route')
    const { username } = req.params
    print('username in get rofile route',username)
    const user = await User.findOne({username})
    print(user)
    
    const user_posts= await Post.find({userId:user._id})
   print('this user has posted ') 
    print(user_posts)
    if(user_posts==[]){
      res.status(200).json('No posts yet')

    }
        

    res.status(200).json(user_posts)
  } catch (err) {
    next(err)
  }
})


userRouter.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    //add check to ensure that only owner of profile or admin can edit
    //req.body.userId==id, this check means we have to send the requesters id when making request

    // if(id !== req.user.id){

    //     return res.status(403).json({ message: 'Forbidden: You can only edit your own profile' })

    // }
    const user = await User.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    })
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
})
//delete user
userRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    //add check to ensure that only owner of profile or admin can delete
    //if in future there are other relations between user add logic to delete them or not
    const user = await User.findByIdAndDelete(id)
    res.status(200).json("deleted successfully")
  } catch (err) {
    next(err)
  }
})

//get a user
userRouter.get("/", async (req, res, next) => {
  const id=req.query.userId
  const username=req.query.username

  try {

      const user = id? await User.findById(id):await User.findOne({username})
      //remove unneccessary props to display like users email and password
      const {email,password,...relevantUserProperties}=user._doc

      res.status(200).json(relevantUserProperties)
    } catch (err) {
      next(err)
    }
  })

  userRouter.put("/:id/follow", async (req, res, next) => {
    try {
        //figure out how to get the senders id as you need to add the followed user to current users following list
      const { id } = req.params
      const user = await User.findById(id)
      print(user)
      if(!user.followers.includes("i added something")){
        await user.updateOne({$push:{followers:"i added something"}})
        res.send('followed the user')


      }else{
        res.send('you are already following')


      }


    } catch (err) {
      next(err)
    }
  })

  userRouter.put("/:id/unfollow", async (req, res, next) => {
    try {
        //figure out how to get the senders id as you need to add the followed user to current users following list
      const { id } = req.params
      const user = await User.findById(id)
      print(user)
      if(user.followers.includes("i added something")){
        await user.updateOne({$pull:{followers:"i added something"}})
        res.send('unfollowed the user')


      }else{
        res.send('you are already not following')


      }


    } catch (err) {
      next(err)
    }
  })
  

  
module.exports = userRouter
