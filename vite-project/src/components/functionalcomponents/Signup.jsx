import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [firstName,setFN]=useState("");
  const [lastName,setLN]=useState("");
  const [email,setEmail]=useState("");
  const [password,setpass]=useState("");
  const [phoneNumber,setphone]=useState(0);

  const handleSignup=async(e)=>{
    e.preventDefault()
    const res= await axios.post("https://sjit2025mern-ef5v.onrender.com/Signup",{
      firstName,lastName,email,password,phoneNumber
    })
    console.log(res);

  }

  return (

    <div className="signup-container">
        <h2>Sign Up</h2>
        <form id="signupForm" />
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" value={firstName} onChange={e=>{setFN(e.target.value)}}  required/><br></br>

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="name" value={lastName} onChange={e=>{setLN(e.target.value)}} required/><br></br>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={e=>{setEmail(e.target.value)}} required/><br></br>

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={e=>{setpass(e.target.value)}} required/><br></br>

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="number" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={e=>{setphone(e.target.value)}} required/><br></br>

            <button type="submit" onClick={handleSignup}>Sign Up</button>
       
        <p id="message"></p>
    </div>
  )
}

export default Signup;
