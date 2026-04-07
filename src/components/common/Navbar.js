import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../styles/navbar.css";

const Navbar = () => {
  return (
     <nav className='navbar'>
      <div className='navbar-logo'>Note Taking App</div>
      <ul className='nav-links'>
        <li>
          <NavLink 
            to="/notes" 
            className='nav-link'
          >
            Notes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/categories" 
            className='nav-link'
          >
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;