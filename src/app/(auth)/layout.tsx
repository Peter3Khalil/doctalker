import React from 'react';
import PageContainer from './components/PageContainer';
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="h-[100svh] w-full">
      <PageContainer>{children}</PageContainer>
    </main>
  );
};

export default Layout;
