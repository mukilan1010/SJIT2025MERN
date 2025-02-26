const express = require("express");
const mdb = require("mongoose");
const app = express();
const cors=require("cors");

const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const Login = require("./models/LoginScheme.js");
app.use(cors())
app.use(express.json());
const Signup = require("./models/SignupScheme.js");
const port = process.env.PORT || 3000;
dotenv.config();

console.log(process.env.MONGODB_URL);

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB CONECTED");
  })
  .catch((err) => {
    console.log("Check your connection String", err);
  });

app.post("/Signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    console.log(firstName)
    // const user = await Signup.findOne({ email });
    // if (user) {
    //   return res
    //     .status(404)
    //     .json({ message: "user Already found", isSignup: false });
    // }
    // const hashedPassword = await bcrypt.hash(password, 10);
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    });

    newSignup.save();
    console.log("Signup Successful");
    res.status(201).json({ message: "Signup Successful", isSignup: true });
    console.log("Signup Successful");
  } catch (error) {
    console.log(error);
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Signup.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "user not found", isLogin: false });
    }
    const validpassword = await bcrypt.compare(password, user.password);
    console.log(validpassword);
    if (!validpassword) {
      return res
        .status(401)
        .json({ message: "Invalid Password", isLogin: false });
    }
    const newLogin = new Login({
   
        email: email,
        password: password,
   
      });
      newLogin.save();
  
    console.log("login successfull");
    res.status(200).json({ message: "Login Successful", isLogin: true });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Error", isLogin: false });
  }
});

app.get("/static", (req, res) => {
  res.sendFile("D:/SJIT MERN/index.html");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
