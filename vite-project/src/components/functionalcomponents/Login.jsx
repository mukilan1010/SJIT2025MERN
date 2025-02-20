import React from 'react'

const Login = () => {
  return (
    
    <div>
      
      <h1>Login</h1>
      <form>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" /><br></br>
      <label for="email">Password:</label>
      <input type="password" id="email" name="password" /><br></br>
      <button type="submit">Login</button>

      <p>New user? <a href='/signup'> Signup</a></p>


      </form>
      
    </div>
  );
}

export default Login;
