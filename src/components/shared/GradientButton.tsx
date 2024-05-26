import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
interface ComponentProps extends React.ComponentProps<typeof Button> {}
const GradientButton: FC<ComponentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Button
      className={cn(
        'gradient mt-6 w-fit px-8 py-6  text-lg transition-all duration-500 ease-in-out hover:scale-110 md:mt-12',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
