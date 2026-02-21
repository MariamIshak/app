import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="Little Lemon Logo" />
        </Link>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="#about" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="#menu" onClick={closeMenu}>Menu</Link>
            </li>
            <li>
              <Link to="/booking" onClick={closeMenu}>Reservations</Link>
            </li>
            <li>
              <Link to="#order" onClick={closeMenu}>Order Online</Link>
            </li>
            <li>
              <Link to="#login" onClick={closeMenu}>Login</Link>
            </li>
          </ul>
        </div>

        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;