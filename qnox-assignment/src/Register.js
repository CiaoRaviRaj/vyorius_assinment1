import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Register.css";

function Register() {
  const [registerUser, setregisterUser] = useState({
    name: "",
    collageName: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setregisterUser({
      ...registerUser,
      [name]: value,
    });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, collageName, number, email, password } = registerUser;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        collageName,
        number,
        email,
        password,
      }),
    });

    const data = await res.json();
  };
  return (
    <div className="register">
      <Link to="/">
        <h1 className="register__Logo">ONOX</h1>
      </Link>
      <form>
        <div className="register__contain">
          <h5>Name</h5>
          <input onChange={handleChnage} type="text" name="name" />

          <h5>College Name</h5>
          <input onChange={handleChnage} type="text" name="collegeName" />

          <h5>Mobile Number</h5>
          <input onChange={handleChnage} type="text" name="number" />

          <h5>Email</h5>
          <input onChange={handleChnage} type="email" name="email" />

          <h5>Password</h5>
          <input onChange={handleChnage} type="password" name="password" />

          <button className="register__button" type="submit">
            register
          </button>

          <div>
            <Link to="/login">
              <button className="register__login__button" type="submit">
                Login
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
