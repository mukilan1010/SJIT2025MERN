const mdb=require('mongoose')

const SignupScheme = mdb.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    phoneNumber:String
})
const signup_schema=mdb.model("Signup",SignupScheme)
module.exports=signup_schema;