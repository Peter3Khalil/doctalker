import { cn } from '@/lib/utils';
import React, { FC } from 'react';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Header: FC<ComponentProps> = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'h-20 border-b border-muted-foreground/30 bg-accent-foreground text-background',
        className,
      )}
      {...props}
    >
      <div className="flex h-full items-center justify-between px-6 md:px-12 lg:px-32">
        <div className="flex items-center gap-2 text-lg font-bold md:text-xl">
          <span className="rounded-xl bg-primary px-2 py-1 text-primary-foreground">
            DOC
          </span>
          <span className="gradient to-background bg-clip-text text-3xl text-transparent">
            Talker
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn">Login</button>
          <button className="btn">Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
