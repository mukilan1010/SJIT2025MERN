const express=require('express')
const mdb=require('mongoose')
const app=express()
const dotenv=require('dotenv')
app.use(express.json());
const Login = require("./models/loginScheme.js");
const port=process.env.PORT||3000;
dotenv.config();

console.log(process.env.MONGODB_URL)

mdb.connect("mongodb+srv://sjit:sjit@student.6harp.mongodb.net/").then(()=>{
    console.log("CONECTED");
},).catch((err)=>{
    console.log("Check your connection String",err);
});

app.post("/login",(req,res)=>{
    try{
        const {firstName,lastName,email,password,phoneNumber}=req.body
    const newLogin=new Login({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
    });
newLogin.save()
console.log("Login Successful");
res.status(201).json({message:"Login Successful",isLogin:true});
console.log("Login Successful");


    }catch(error){
        console.log(error)
        
    }


})


app.get('/static',(req,res)=>{
    res.sendFile("D:/SJIT MERN/index.html");
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})