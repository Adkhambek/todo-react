import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Main from './pages/Main';
import Users from './pages/Users';
import fetchData from './utils/fetchData';

function App() {
  const [user, setUser] = useState<any>(null);
  const [loader, setLoader] = useState<boolean>(false);

  async function fetchUser() {
    const result: any = await fetchData('me', 'GET');

    setUser(result);
    setLoader(false);
  }

  useEffect(() => {
    setLoader(true);
    fetchUser();
  }, []);

  return (
    <>
      {!loader && user?.data && <Header />}
      <Routes>
        {!loader && user?.data && (
          <Route path="/">
            <Route index element={<Main user={user} />} />
            <Route path="users" element={<Users user={user} />} />
          </Route>
        )}
        {!loader && !user?.data && <Route path="/login" element={<Login />} />}

        {!loader && user?.data && (
          <Route path="/login" element={<Navigate to="/" replace />} />
        )}
        {!loader && !user?.data && (
          <Route path="/" element={<Navigate to="/login" replace />} />
        )}
        {!loader && !user?.data && (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </>
  );
}

export default App;
