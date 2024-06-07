'use client';
import { useUser } from '@/providers/user-provider';
import React, { useEffect, useState } from 'react';
import LoadingComponent from './shared/Loading';
import withEmailVerification from '@/HOCs/withEmailVerification';
interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isError, isSuccess, isLoading } = useUser();

  useEffect(() => {
    if (isSuccess) {
      setIsAuthenticated(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setIsAuthenticated(false);
      window.location.href = '/login';
    }
  }, [isError]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default withEmailVerification(PrivateRoute);
