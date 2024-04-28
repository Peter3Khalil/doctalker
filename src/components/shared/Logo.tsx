import { cn } from '@/lib/utils';
import React, { FC } from 'react';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Logo: FC<ComponentProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2 text-lg font-bold md:text-xl',
        className,
      )}
      {...props}
    >
      <span className="rounded-xl bg-primary px-2 py-1 text-primary-foreground">
        DOC
      </span>
      <span className="gradient to-background bg-clip-text text-transparent">
        Talker
      </span>
    </div>
  );
};

export default Logo;
