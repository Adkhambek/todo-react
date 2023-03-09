import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';

function ProtectedRoute({ user, children }: any) {
  return user?<Outlet/>:<Navigate to={'/login'}/>;
}

export default ProtectedRoute;
