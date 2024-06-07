import React from 'react';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="min-h-[100svh] w-full bg-foreground">{children}</main>
  );
};

export default Layout;
