import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  const location = useLocation();
  if (!user) {
    return <Navigate to='/signin' state={{ from: location }} />;
  }
  return children;
};
