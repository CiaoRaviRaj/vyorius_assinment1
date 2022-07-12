import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";

function Login({ setCurrentUser }) {
  const history = useNavigate();

  const [loginUser, setloginUser] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const signin = {
      email: loginUser.email,
      password: loginUser.password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const data = JSON.stringify(signin);

      const res = await axios.post("http://localhost:5000/", data, config);

      
      setCurrentUser(res.data);

      history("/");

      // window.location.reload(); // you use post , put , delete
    } catch (err) {
      console.error("error", err.response.data);
    }
  };

  const handleChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setloginUser({
      ...loginUser,
      [name]: value,
    });
  };
  return (
    <div className="login">
      <Link to="/">
        <h1 className="login__title"> OXON </h1>
      </Link>

      <form onSubmit={onSubmit}>
        <div className="login__contain">
          <h5>Email</h5>
          <input
            onChange={handleChnage}
            type="email"
            name="email"
            value={loginUser.email}
          />
          <h5>Password</h5>
          <input
            onChange={handleChnage}
            type="password"
            name="password"
            value={loginUser.password}
          />
          <button className="login__button" type="submit">
            Login
          </button>
          <div>
            <Link to="/register">
              <button className="login__register__button" type="submit">
                register
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
