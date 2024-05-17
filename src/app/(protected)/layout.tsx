import PrivateRoute from '@/components/PrivateRoute';
import React from 'react';
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-[100svh] w-full bg-accent-foreground">
      <PrivateRoute>{children}</PrivateRoute>
    </div>
  );
};

export default Layout;
