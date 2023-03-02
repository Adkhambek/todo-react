import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="login">
      <h1 className="login">Login</h1>
      <form className="login__form">
        <label htmlFor="username">
          <p>Username:</p>
          <input
            type="text"
            id="username"
            placeholder="type your username"
            name="username"
            required
          />
        </label>
        <label htmlFor="password">
          <p>Password:</p>
          <input
            type="password"
            id="password"
            placeholder="type your password"
            name="password"
            required
          />
        </label>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
