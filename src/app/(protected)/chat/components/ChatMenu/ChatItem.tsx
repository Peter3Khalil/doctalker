import { ChatIcon } from '@/components/shared/Icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';

const ChatItem: FC<React.HTMLAttributes<HTMLLIElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <li className={cn('w-full py-2', className)} {...props}>
      <Button
        variant="ghost"
        className="w-full justify-start gap-2 overflow-hidden text-ellipsis hover:bg-primary/30 hover:text-primary-foreground/90"
      >
        <ChatIcon size={16} className="shrink-0" />
        <p className="w-full overflow-hidden text-left">{children}</p>
      </Button>
    </li>
  );
};

export default ChatItem;
