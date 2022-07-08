import React from 'react'
import "../assets/css/App.css";

const Login = () => {
  return (
    <section className="login-body">
    <h1 className="login-title">Login</h1>

    <form>
      <div className="form-control">
       
        <input
          type="text"
          id="title"
          value=""
         
          placeholder="Your email"
        />
      </div>

      <div className="form-control">
      
        <input
          type="password"
          id="price"
          value=""

          placeholder="Password"
        />
      </div>

     

      <div className="form-control">
        <button className="login-btn" type="submit">
          Login
        </button>
      </div>
    </form>
  </section>
  )
}

export default Login
