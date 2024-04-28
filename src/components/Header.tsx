import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Logo from '@/components/shared/Logo';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Header: FC<ComponentProps> = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-20 h-16 w-full border-b border-muted-foreground/30 bg-foreground/30 text-background backdrop-blur-3xl md:h-20',
        className,
      )}
      {...props}
    >
      <div className="flex h-full items-center justify-between px-6 md:px-12 lg:px-32">
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
