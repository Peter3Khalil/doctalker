import React from 'react';
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = false;
  if (!session) {
    return <div className="text-accent">Not Authenticated</div>;
  }
  return <main className="h-[100svh] w-full text-accent">{children}</main>;
};

export default Layout;
