const mdb=require('mongoose')

const loginScheme = mdb.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    phoneNumber:String
})
const login_schema=mdb.model("Login",loginScheme)
module.exports=login_schema;