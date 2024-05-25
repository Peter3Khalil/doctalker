import PrivateRoute from '@/components/PrivateRoute';
import { GlobalProvider } from '@/contexts/GlobalContext';
import React from 'react';
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-[100svh] w-full bg-foreground">
      <GlobalProvider>
        <PrivateRoute>{children}</PrivateRoute>
      </GlobalProvider>
    </div>
  );
};

export default Layout;
