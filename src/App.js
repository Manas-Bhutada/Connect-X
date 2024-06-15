import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Mentors from './components/Mentors';
import Register from './components/Register';
import GetConnected from './components/GetConnected';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/register" element={<Register />} />
          <Route path="/get-connected" element={<GetConnected />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
