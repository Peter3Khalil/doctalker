import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Logo from '@/components/shared/Logo';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Header: FC<ComponentProps> = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'fixed left-[50%] animate-shadow top-0 translate-y-[30px] rounded-full translate-x-[-50%] z-20 h-16 w-[90%] border-b border-muted-foreground/30 custom-shadow text-background backdrop-blur-3xl md:h-20',
        className,
      )}
      {...props}
    >
      <div className="flex h-full items-center justify-between px-6 md:px-12 lg:px-20">
        <Logo />
        <div className="flex items-center space-x-4">
          <button className="btn">Login</button>
          <button className="btn">Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
