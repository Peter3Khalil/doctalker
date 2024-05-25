import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
const messageVariants = cva(
  'w-full break-before-all break-words rounded-md px-5 py-3',
  {
    variants: {
      variant: {
        user: 'bg-primary text-primary-foreground',
        bot: 'bg-accent-foreground text-accent',
      },
    },
    defaultVariants: {
      variant: 'user',
    },
  },
);
interface MessageProps
  extends React.HTMLAttributes<HTMLLIElement>,
    VariantProps<typeof messageVariants> {
  children: string;
}
const Message = React.forwardRef<HTMLLIElement, MessageProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(messageVariants({ variant, className }))}
        {...props}
      >
        {children}
      </li>
    );
  },
);

Message.displayName = 'Message';

export default Message;
