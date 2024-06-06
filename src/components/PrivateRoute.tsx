'use client';
import { isValidToken } from '@/features/authentication';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
interface PrivateRouteProps {
  children: React.ReactNode;
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const { isLoading } = useQuery('validate-token', isValidToken, {
    onSuccess() {
      setIsAuthenticated(true);
    },
    onError() {
      setIsAuthenticated(false);
      router.push('/login');
    },
  });

  if (!isAuthenticated || isLoading) {
    return <p>Redirecting...</p>;
  }
  return <>{children}</>;
};

export default PrivateRoute;
