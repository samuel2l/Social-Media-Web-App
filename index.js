const express=require('express')
const app=express()
const print=console.log
const mongoose=require('mongoose')
const morgan=require('morgan')
const helmet=require('helmet')
const dotenv=require('dotenv')
dotenv.config()


mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    print('connection successful')
}).catch(
    (error)=>
        {
            print('error don come')
            print(error)
        })


app.listen(3000,'0.0.0.0',()=>{
print('server up and running')
})