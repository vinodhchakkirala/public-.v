import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="hospital-header">
      <div className="hospital-logo">
        <img src="https://th.bing.com/th?q=Medical+Clinic+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="Hospital Logo" />
      </div>
      <h1>Hospital</h1>
      <nav className="hospital-nav">
        <ul className="hospital-nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
