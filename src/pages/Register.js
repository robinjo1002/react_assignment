import React from 'react'
import "../assets/css/App.css";

const Register = () => {
  return (
    <section className="register-body">
    <h1 className="register-title">Register</h1>

    <form>
      <div className="form-control">
      
        <input
          type="text"
          id="title"
          value=""
         
          placeholder="First Name"
        />
      </div>

      <div className="form-control">
     
        <input
          type="password"
          id="price"
          value=""

          placeholder="Last Name"
        />
      </div>
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
        <button className="register-btn" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  </section>
  )
}

export default Register
