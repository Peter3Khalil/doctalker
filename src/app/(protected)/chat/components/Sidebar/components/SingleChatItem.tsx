'use client';
import { ChatIcon } from '@/components/shared/Icons';
import useResizeObserver from '@/hooks/useResizeObserver';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import ChatMenu from '@/components/shared/ChatMenu';
interface SingleChatItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: string;
}
const SingleChatItem: FC<SingleChatItemProps> = ({
  children,
  className,
  ...props
}) => {
  const ref = React.useRef<HTMLLIElement>(null);
  const { hasOverFlow } = useResizeObserver({ ref });
  return (
    <ChatMenu.ChatItem
      className={cn(
        'cursor-pointer rounded px-3 hover:bg-accent-foreground',
        className,
      )}
      ref={ref}
      {...props}
    >
      <ChatIcon size={16} className="shrink-0" />
      <p
        className={cn('w-full overflow-hidden text-nowrap', {
          'gradient from-transparent via-background to-background bg-clip-text':
            hasOverFlow,
        })}
      >
        {children}
      </p>
    </ChatMenu.ChatItem>
  );
};

export default SingleChatItem;
