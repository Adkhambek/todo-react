import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import fetchData from '../../utils/fetchData';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const result = await fetchData('login', 'POST', {
      login: username,
      password,
    });

    if (!result.ok) {
      toast.error(result.message);
    } else {
      navigate('/main');
    }
  }

  return (
    <div className="login">
      <h1 className="title">Login</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <p>Username:</p>
          <input
            type="text"
            id="username"
            placeholder="type your username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <p>Password:</p>
          <input
            type="password"
            id="password"
            placeholder="type your password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
