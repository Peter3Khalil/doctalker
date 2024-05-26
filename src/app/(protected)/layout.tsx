import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import Sidebar from '@/components/chat/Sidebar';
import PrivateRoute from '@/components/PrivateRoute';
import { GlobalProvider } from '@/contexts/GlobalContext';
import ThemeProvider from '@/contexts/ThemeContext';
import React from 'react';
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <GlobalProvider>
      <PrivateRoute>
        <ThemeProvider>
          <Sidebar />
          <Header />
          <div className="min-h-svh w-full bg-accent text-accent-foreground">
            <Main>{children}</Main>
          </div>
        </ThemeProvider>
      </PrivateRoute>
    </GlobalProvider>
  );
};

export default Layout;
