import '../css/NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom';
const NavBar=()=>{
return(
    <header>
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/navbar">NavBar</Link></li>
        </nav>
    </header>
);

}

export default NavBar;
