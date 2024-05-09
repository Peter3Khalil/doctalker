import React from 'react';
const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
const Layout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  await wait(2000);
  return <main className='w-full h-[100svh]'>{children}</main>;
};

export default Layout;
