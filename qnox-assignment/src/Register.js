import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import "./Register.css";

function Register() {


  const [registerUser, setregisterUser] = useState({
    firstName: "",
    lastName: "",
    collegeName: "",
    phone: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, collegeName, phone, email, password } =
    registerUser;

  const handleChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setregisterUser({
      ...registerUser,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      collegeName: collegeName,
      phone: phone,
      email: email,
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };


    try {
      const data = JSON.stringify(newUser);

      await axios.post("http://localhost:5000/registerUser", data, config);

      setregisterUser({
        firstName: "",
        lastName: "",
        collegeName: "",
        phone: "",
        email: "",
        password: "",
      });

      

      window.location.replace("/login")
      // window.location.reload(); // you use post , put , delete
    } catch (err) {
      console.error("error", err.response.data);
    }
  
  };

  return (
    <div className="register">
      <Link to="/">
        <h1 className="register__Logo">ONOX</h1>
      </Link>
      <form onSubmit={onSubmit}>
        <div className="register__contain">
          <h5>First Name</h5>
          <input
            onChange={handleChnage}
            type="text"
            name="firstName"
            value={firstName}
            placeholder="first name"
            required
          />

          <h5>Last Name</h5>
          <input
            onChange={handleChnage}
            type="text"
            name="lastName"
            value={lastName}
            placeholder="last name"
            required
          />

          <h5>College Name</h5>
          <input
            onChange={handleChnage}
            type="text"
            name="collegeName"
            value={collegeName}
            required
          />

          <h5>Mobile Number</h5>
          <input
            onChange={handleChnage}
            type="text"
            name="phone"
            value={phone}
            required
          />

          <h5>Email</h5>
          <input
            onChange={handleChnage}
            type="email"
            name="email"
            value={email}
            required
          />

          <h5>Password</h5>
          <input
            onChange={handleChnage}
            type="password"
            name="password"
            value={password}
            required
          />

          <button className="register__button" type="submit">
            register
          </button>

          <div>
            <Link to="/login">
              <button className="register__login__button">Login</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
