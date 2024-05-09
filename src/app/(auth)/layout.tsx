import React from 'react';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className='w-full h-[100svh]'>{children}</main>;
};

export default Layout;
