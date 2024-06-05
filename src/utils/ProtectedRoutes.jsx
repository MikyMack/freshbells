// utils/ProtectedRoutes.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
  const isAuthenticated = useSelector(state => state.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to='/signin/' />;
}

export default ProtectedRoutes;
