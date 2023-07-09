import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with your authentication logic

  if (isAuthenticated) {
    return <Route>{children}</Route>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;