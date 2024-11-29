const express = require("express")
const app = express()
const print = console.log
const mongoose = require("mongoose")
const morgan = require("morgan")
const helmet = require("helmet")
const dotenv = require("dotenv")
const userRouter=require('./routes/users')
const authRouter=require('./routes/auth')
const postRouter=require('./routes/posts')

dotenv.config()
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    print("connection successful")
  })
  .catch((error) => {
    print("error don come")
    print(error)
  })


app.use(express.json())
app.use(helmet())
app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)
app.use('/api/post',postRouter)



app.use((err,req,res,next)=>{
    print(err)
    const {status=500,message='Something went wrong'}=err
    res.status(status).send(message)
    
})

app.listen(3000, "0.0.0.0", () => {
  print("server up and running")
})
