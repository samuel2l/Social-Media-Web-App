const authRouter=require("express").Router()
const User=require('../models/user')
authRouter.get('/',(req,res)=>{
    res.send('auths base')
})

authRouter.get('/new',async(req,res,next)=>{
    try{

// const new_user=new User({
// username:"sam",
// email:'sama29571@gmail.com',
// password:"123"
// })
// await new_user.save()
res.send('user created')
    }catch(e){
next(e)
    }


})

module.exports=authRouter