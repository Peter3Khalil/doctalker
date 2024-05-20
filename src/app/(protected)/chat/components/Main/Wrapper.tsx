import { cn } from '@/lib/utils';
import React from 'react';

const Wrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        'h-full w-full shrink-0 snap-start border border-primary md:w-0 md:flex-1 md:shrink md:snap-normal',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
});
Wrapper.displayName = 'Wrapper';

export default Wrapper;
