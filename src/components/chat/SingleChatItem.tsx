'use client';
import ChatMenu from '@/components/shared/ChatMenu';
import { ChatIcon } from '@/components/shared/Icons';
import useResizeObserver from '@/hooks/useResizeObserver';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
interface SingleChatItemProps extends React.HTMLAttributes<HTMLLIElement> {
  isActive?: boolean;
}
const SingleChatItem: FC<SingleChatItemProps> = ({
  children,
  className,
  isActive = false,
  ...props
}) => {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const { hasOverFlow } = useResizeObserver({ ref });
  return (
    <ChatMenu.ChatItem
      className={cn(
        'flex w-full cursor-pointer items-center rounded px-3 hover:bg-muted/80',
        className,
        {
          'bg-muted': isActive,
        },
      )}
      {...props}
    >
      <ChatIcon size={16} className="shrink-0" />
      <p
        className={cn('flex-1 overflow-hidden text-nowrap', {
          'bg-gradient-to-l from-transparent via-background to-background bg-clip-text':
            hasOverFlow,
        })}
        ref={ref}
      >
        {children}
      </p>
    </ChatMenu.ChatItem>
  );
};

export default SingleChatItem;
