import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>ONOX</h1>
      </div>

      <div className="autar">
        <Link to="/login">
          <img
            className="autar__image"
            src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
            alt=""
          />

          <p className="autar__name">Sign in</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
