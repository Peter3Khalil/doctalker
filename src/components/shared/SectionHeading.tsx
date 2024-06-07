import { cn } from '@/lib/utils';
import React, { FC } from 'react';
interface ComponentProps extends React.HTMLProps<HTMLHeadingElement> {
  children: string;
}

const SectionHeading: FC<ComponentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={cn(
        'bg-gradient-to-r from-primary to-background bg-clip-text text-center text-2xl font-bold text-transparent lg:text-3xl',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
