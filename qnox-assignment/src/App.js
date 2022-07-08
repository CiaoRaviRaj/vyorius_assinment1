import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import './App.css';

import Header from './Header';
import Login from './Login';
import Register from './Register';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route 
          path='/login'
          element={
            <Login />
          }
        />

        {/* REGISTER */}
        <Route 
          path='/register'
          element={
            <Register />
          }
        />

        {/* Home */}
        <Route 
          path="/"
          element={
            <Header />
          }
        />

        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
