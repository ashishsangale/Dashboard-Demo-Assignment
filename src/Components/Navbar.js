import React from 'react';
import './Navbar.css';

function Navbar() {
  
  return (
    <header className="navbar">
        <div>
          <h1>Acies Case Study</h1>
        </div>

        <nav className="navigation">
            <ul>
              <li><a href="#post1">Tab 1</a></li>
              <li><a href="#post2">Tab 2</a></li>
              <li><a href="#post3">Tab 3</a></li>
            </ul>
        </nav>
    </header>
  )
};

export default Navbar;