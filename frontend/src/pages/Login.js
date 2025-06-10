import React, { useState } from "react";
import './Login.css'

  const Login = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      confirmPassword: ""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if ("abc" !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      console.log("Form submitted", formData);
    };
  
  return (
    <div className="login-container">
      <span>Login to</span>
       <div className="home-logo">
          <span className="orange-text">H</span>
          <span className="gray-texst">ire</span>
          <span className="orange-text">On</span>
        </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="User Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="Password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
