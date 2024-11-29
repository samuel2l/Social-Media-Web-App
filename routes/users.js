const userRouter=require("express").Router()


userRouter.get('/',(req,res)=>{
    res.send('users base')
})

module.exports=userRouter