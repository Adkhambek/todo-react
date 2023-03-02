import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <>
      <header>
        <nav className="nav">
          <Link className="nav-link" to="/users">
            Users
          </Link>
          <Link className="nav-link" to="/logout">
            Logout
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
