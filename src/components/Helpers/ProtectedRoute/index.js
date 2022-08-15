import React from 'react'
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ContextAuth } from '../../../hooks/useAuth';

export const ProtectedRoute = ({
  redirectPath = '/login',
  userExists=false,
  children,
}) => {
  const { user } = useContext(ContextAuth);
  const userLogged = !userExists ? !user : !!user;
  
  if (userLogged) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};