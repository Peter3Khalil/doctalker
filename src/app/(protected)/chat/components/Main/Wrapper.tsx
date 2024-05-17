import { cn } from '@/lib/utils';
import React, { FC } from 'react';

const Wrapper: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn('h-full flex-1 border border-primary', className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Wrapper;
