import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Header.css";

function Header({ name, setCurrentUser }) {
  const history = useNavigate();

  const handleClick = () => {
    if (name) {
      setCurrentUser([]);
      history("/");
    }
  };
  return (
    <div className="header">
      <div className="logo">
        <h1>ONOX</h1>
      </div>

      <div onClick={handleClick} className="autar">
        <Link to={!name && "/login"}>
          <img
            className="autar__image"
            src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
            alt=""
          />

          <div className="autar__name">
            <p> {name ? <>{name}</> : "sign-in"} </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
