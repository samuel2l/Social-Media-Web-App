const userRouter = require("express").Router()
const User = require("../models/user")
const print=console.log
// update profile
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
userRouter.get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await User.findById(id)
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
