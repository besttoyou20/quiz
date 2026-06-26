import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

import "./index.css";


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
  )
}

export default App