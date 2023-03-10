import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserInterface } from '../../types';
import fetchData from '../../utils/fetchData';
import './header.css';

function Header() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const [user, setUser] = useState<UserInterface | null>(null);

  async function fetchUser() {
    const result: any = await fetchData('me', 'GET');

    setUser(result.data);
  }

  async function handleLogout() {
    await fetchData('logout', 'POST');
    navigate('/login');
    window.location.reload();
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <header>
        <nav className="nav">
          {user && user.role === 'admin' && (
            <div className="double-nav-links">
              {path === '/users' && (
                <Link className="nav-link" to="/">
                  Back
                </Link>
              )}

              <Link className="nav-link" to="/users">
                Users
              </Link>
            </div>
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
