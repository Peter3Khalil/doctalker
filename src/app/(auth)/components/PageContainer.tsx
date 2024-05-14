'use client';
import Logo from '@/components/shared/Logo';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import AuthHero from './AuthHero';
interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
const PageContainer: FC<PageContainerProps> = ({
  children,
  className,
  ...props
}) => {
  const { isMatched: isDesktop } = useMediaQuery({ minWidth: 1024 });
  return (
    <div className={cn('flex h-full', className)} {...props}>
      <Logo
        variant={!isDesktop ? 'primary' : 'default'}
        className={cn('fixed left-6 top-3 z-50 h-12 w-12')}
      />
      <div className="absolute left-0 top-0 h-full w-full flex-1 lg:relative">
        {isDesktop && <AuthHero />}
      </div>
      <section className="relative z-20 flex w-full shrink-0 flex-col items-center justify-center px-6 text-accent-foreground md:px-12 lg:w-[600px]">
        {children}
      </section>
    </div>
  );
};

export default PageContainer;
