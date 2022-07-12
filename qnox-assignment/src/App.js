import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [currnetUser, setCurrentUser] = useState([]);

  const { _id ,firstName, lastName, collegeName, phone, email, password } =
    currnetUser;

  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />

        {/* REGISTER */}
        <Route path="/register" element={<Register />} />

        {/* User */}
        <Route
          path="/"
          element={
            <>
              <Header name={firstName} setCurrentUser={setCurrentUser} />

              <Home
                _id={_id}
                firstName={firstName}
                lastName={lastName}
                collegeName={collegeName}
                phone={phone}
                email={email}
                password={password}
              />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// adding proxy in package.json is due to we advoicing writing of server hosting port details
