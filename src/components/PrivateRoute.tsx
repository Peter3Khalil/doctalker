'use client';
import { redirect } from 'next/navigation';
import React, { useLayoutEffect, useState } from 'react';
interface PrivateRouteProps {
  children: React.ReactNode;
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthenticated(false);
      redirect('/login');
    } else {
      //validate token
      setIsAuthenticated(true);
    }
  }, []);
  if (!isAuthenticated) {
    return null;
  }
  return <>{children}</>;
};

export default PrivateRoute;
