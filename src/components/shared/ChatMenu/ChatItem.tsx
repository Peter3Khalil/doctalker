import { cn } from '@/lib/utils';
import React from 'react';

const ChatItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLProps<HTMLLIElement>
>(({ children, className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={cn(
        'flex w-full items-center gap-2 text-nowrap py-2 text-[0.8em] font-semibold',
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
});

ChatItem.displayName = 'ChatItem';

export default ChatItem;
