import { cn } from '@/lib/utils';
import React, { FC } from 'react';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Section: FC<ComponentProps> = ({ className, children, ...props }) => {
  return (
    <section
      className={cn(
        'flex flex-col items-center gap-10 bg-accent-foreground px-6 py-12 text-accent lg:px-20',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
