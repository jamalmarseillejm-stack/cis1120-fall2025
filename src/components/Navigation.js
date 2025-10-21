// src/components/Navigation.js
import React from "react";
import { HashLink } from "react-router-hash-link"; // or { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <ul>
        <li><HashLink to="/">Home</HashLink></li>
        <li><HashLink to="/about">About Organization</HashLink></li>
        <li><HashLink to="/contact">Contact Us</HashLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
