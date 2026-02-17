import React from 'react';
import Nav from './Nav';
import logo from './public/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
}

export default Header;