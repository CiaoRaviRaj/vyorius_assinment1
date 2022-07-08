import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  const [loginUser, setloginUser] = useState({
    email: "",
    password: "",
  });

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

      <form>
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
