'use client';
import { isValidToken } from '@/features/authentication';
import { useRouter } from 'next/navigation';
import React, { useLayoutEffect, useState } from 'react';
interface PrivateRouteProps {
  children: React.ReactNode;
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthenticated(false);
      router.push('/login');
    } else {
      //validate token
      isValidToken(token).then((res) => {
        if (res) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.push('/login');
        }
      });
    }
  }, [router]);
  if (!isAuthenticated) {
    return <p>Redirecting...</p>;
  }
  return <>{children}</>;
};

export default PrivateRoute;
