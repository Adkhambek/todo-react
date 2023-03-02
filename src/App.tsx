import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Main from './pages/Main';
import Users from './pages/Users';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Header />}>
        <Route path="/main" element={<Main />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
