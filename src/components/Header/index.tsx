import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserInterface } from '../../types';
import fetchData from '../../utils/fetchData';
import './header.css';

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserInterface | null>(null);

  async function fetchUser() {
    const result: any = await fetchData('me', 'GET');

    setUser(result.data);
  }

  async function handleLogout() {
    const result = await fetchData('logout', 'POST');

    if (!result.ok) {
      navigate('/');
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <header>
        <nav className="nav">
          {user && user.role === 'admin' && (
            <Link className="nav-link" to="/users">
              Users
            </Link>
          )}
          <button
            className="nav-link nav-btn"
            type="button"
            onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
