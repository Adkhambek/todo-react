import React from 'react';
import './users.css';

function Users() {
  return (
    <div className="users">
      <h1 className="title">Users</h1>
      <ul className="users__list">
        <li className="users__item">
          <h2 className="users__role">User</h2>
          <p className="users__username">Adham</p>
        </li>
        <li className="users__item">
          <h2 className="users__role">User</h2>
          <p className="users__username">Adham</p>
        </li>
        <li className="users__item">
          <h2 className="users__role">User</h2>
          <p className="users__username">Adham</p>
        </li>
        <li className="users__item">
          <h2 className="users__role">User</h2>
          <p className="users__username">Adham</p>
        </li>
      </ul>
    </div>
  );
}

export default Users;
