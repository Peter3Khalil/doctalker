import Header from '@/components/chat/Header';
import Sidebar from '@/components/chat/Sidebar';
import PrivateRoute from '@/components/PrivateRoute';
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
        <PrivateRoute>
          <div className="flex h-svh w-full">
            <Sidebar className="shrink-0" />
            <div className="flex h-full w-full flex-col">
              <Header />
              <main className="h-[calc(100%-4rem)] w-full bg-accent text-accent-foreground">
                {children}
              </main>
            </div>
          </div>
        </PrivateRoute>
      </ThemeProvider>
    </StateProvider>
  );
};

export default Layout;
