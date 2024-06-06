import { cn } from '@/lib/utils';
import React, { FC } from 'react';
interface FormContainerProps extends React.HTMLProps<HTMLFormElement> {}

const FormContainer: FC<FormContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <form
      className={cn(
        'flex w-full flex-col gap-5 md:w-[400px] lg:w-[90%]',
        className,
      )}
      {...props}
    >
      {children}
    </form>
  );
};

export default FormContainer;
