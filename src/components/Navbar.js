import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar p-5 bg-gradient-to-r from-indigo-500 ...">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Connect-X</div>
        <nav>
          <ul className="flex space-x-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/mentors">Our Mentors</Link></li>
            <li><Link to="/get-connected">Get Connected</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
