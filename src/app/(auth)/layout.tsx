'use client';
import Logo from '@/components/shared/Logo';
import useMediaQuery from '@/hooks/useMediaQuery';
import React from 'react';
import AuthHero from './components/AuthHero';
import { cn } from '@/lib/utils';
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isMatched: isDesktop } = useMediaQuery({ minWidth: 1024 });
  return (
    <main className="h-[100svh] w-full">
      <div className="flex h-full">
        <Logo
          variant={!isDesktop ? 'primary' : 'default'}
          className={cn('fixed left-6 top-3 z-50 h-12 w-12')}
        />
        {isDesktop && <AuthHero />}
        <section className="relative z-20 flex w-full shrink-0 flex-col items-center justify-center px-12 text-accent-foreground lg:w-[600px]">
          {children}
        </section>
      </div>
    </main>
  );
};

export default Layout;
