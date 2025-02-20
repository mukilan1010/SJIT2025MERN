import React from 'react'

const Signup = () => {
  return (
    <div class="signup-container">
        <h2>Sign Up</h2>
        <form id="signupForm"/>
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>

            <button type="submit">Sign Up</button>
       
        <p id="message"></p>
    </div>
  )
}

export default Signup;