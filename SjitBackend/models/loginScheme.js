const mdb=require('mongoose')
const LoginScheme = mdb.Schema({

    email:String,
    password:String
  
})
const Login_schema=mdb.model("Login",LoginScheme)
module.exports=Login_schema;