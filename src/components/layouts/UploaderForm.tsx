import { cn } from '@/lib/utils';
import React, { FC } from 'react';

const UploaderForm: FC<React.HTMLAttributes<HTMLFormElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <form
      className={cn(
        'flex w-[300px] max-w-[90%] flex-col items-center gap-4 rounded-md border-t-4 bg-background px-6 py-6 *:m-0 md:px-12',
        className,
      )}
      {...props}
    >
      {children}
    </form>
  );
};

export default UploaderForm;
