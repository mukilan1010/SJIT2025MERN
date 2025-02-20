import '../css/NavBar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/dropdown.css';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <header>
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
      <div className="dropdown-container">
        <span className="dropdown-title" onMouseOver={() => setIsOpen(!isOpen)}>
          Hooks 
        </span>
        {isOpen && (
          <ol className="dropdown-list">
            <li className="dropdown-item">
              <Link to="/">UseState</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/useeffect">UseEffect</Link>
            </li>
          </ol>
        )}
      </div>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>

      </nav>
    </header>

    );
  };

export default NavBar;
