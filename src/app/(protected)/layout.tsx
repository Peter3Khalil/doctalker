import Header from '@/components/chat/Header';
import Main from '@/components/chat/Main';
import Sidebar from '@/components/chat/Sidebar';
import { StateProvider } from '@/providers/state-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'DocTalker',
};
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <StateProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex h-svh w-full">
          <Sidebar className="shrink-0" />
          <div className="flex h-full w-full flex-col">
            <Header />
            <Main>{children}</Main>
          </div>
        </div>
      </ThemeProvider>
      {/* <PrivateRoute>
      </PrivateRoute> */}
    </StateProvider>
  );
};

export default Layout;
