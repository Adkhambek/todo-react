import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ user, children }: any) {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
