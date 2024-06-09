import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const messageVariants = cva('rounded border p-4 text-base', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-background text-foreground shadow-md',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface MessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof messageVariants> {}

const Message: FC<MessageProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <div className={cn(messageVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
};

export default Message;
