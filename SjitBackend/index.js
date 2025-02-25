const express=require('express')
const app=express()

const port=process.env.PORT||3000;

app.get('/static',(req,res)=>{
    res.sendFile("D:/SJIT MERN/index.html");
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})