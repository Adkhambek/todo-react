import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Main from './pages/Main';
import Users from './pages/Users';
import { UserInterface } from './types';
import fetchData from './utils/fetchData';
import ProtectedRoute from './utils/protectedRoute';

function App() {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const result: any = await fetchData('me', 'GET');

    setUser(result);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (user === null) {
    return <div />;
  }

  return (
    <Routes>
      <Route path="/" element={<Login user={user} />} />
      <Route element={<Header />}>
        <Route
          path="/main"
          element={
            <ProtectedRoute user={user}>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute user={user}>
              <Users user={user} />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;