import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
      <nav className="nav">
        <a className="nav-link" href="/users">
          Users
        </a>
        <a className="nav-link" href="/logout">
          Logout
        </a>
      </nav>
    </header>
  );
}

export default Header;
