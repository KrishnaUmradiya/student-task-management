import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <>
      <div className="form-container">
        <h1 className="form-title">REGISTER</h1>
        <form>
          {/* name field */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
            />
          </div>
          {/*email field */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          {/*phone number field */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          {/*password field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Creat a password"
            />
          </div>
          {/*submit button */}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
        {/*link to login page */}
      </div>
    </>
  );
};

export default Register;
