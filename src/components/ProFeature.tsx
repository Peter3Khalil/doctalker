'use client';
import React from 'react';
type Role = 'free' | 'pro' | 'gold';
interface PrivateRouteProps {
  children: React.ReactNode;
  role?: Role;
  fallback?: React.ReactNode;
}
const ProFeature = ({
  children,
  role = 'free',
  fallback = null,
}: PrivateRouteProps) => {
  const user = {
    role: 'free',
  };
  if (role !== user.role) {
    return fallback;
  }
  return <>{children}</>;
};

export default ProFeature;
