import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ user, children }: any) {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  if (user.role !== 'admin') {
    return <Navigate to="/main" replace />;
  }
  return children;
}

export default ProtectedRoute;
