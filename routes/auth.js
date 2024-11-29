const authRouter = require("express").Router()
const User = require("../models/user")
const bcrypt = require("bcryptjs")
const print = console.log
authRouter.get("/", (req, res) => {
  res.send("auths base")
})

authRouter.post("/register", async (req, res, next) => {
  try {
    print(req.body)
    const { username, email, password } = req.body
    let hash = await bcrypt.hash(password, 8)

    const new_user = new User({
      username,
      email,
      password: hash,
    })
    await new_user.save()
    res.status(200).json(new_user)
  } catch (e) {
    next(e)
  }
})

authRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username: username })
    print("User", user)

    if (user) {
      let isPasswordValid = await bcrypt.compare(password, user.password)
      if (isPasswordValid) {
        res.status(200).json(user)
      }
    } else {
      res.status(404).json("username or password is incorrect")
    }
  } catch (e) {
    next(e)
  }
})

module.exports = authRouter
