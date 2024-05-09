import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Logo from '@/components/shared/Logo';
import Link from 'next/link';
import { PAGES_ROUTES } from '@/constants/pagesRoutes';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Header: FC<ComponentProps> = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'fixed left-[50%] top-0 z-20 h-16 w-[90%] translate-x-[-50%] translate-y-[30px] rounded-full border-2 border-primary/70 text-background backdrop-blur-3xl md:h-20',
        className,
      )}
      {...props}
    >
      <div className="flex h-full items-center justify-between px-6 md:px-12 lg:px-20">
        <Logo />
        <div className="flex items-center space-x-4">
          <Link href={PAGES_ROUTES['login']} className="btn">
            Login
          </Link>
          <button className="btn">Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
