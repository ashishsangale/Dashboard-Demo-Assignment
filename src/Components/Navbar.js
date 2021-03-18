import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  
  return (
    <header className="navbar">
        <div>
          <h1>Acies Case Study</h1>
        </div>

        <nav className="navigation">
            <ul>
              <li><Link to="pie">Pie</Link></li>
              <li><Link to="bar">Bar</Link></li>
              <li><Link to="line">Line</Link></li>
            </ul>
        </nav>
    </header>
  )
};

export default Navbar;