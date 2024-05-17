import React, { FC } from 'react';
import * as ChatMenu from './ChatMenu';
import { StarIcon } from '@/components/shared/Icons';
const StarMessages: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <ChatMenu.ChatMenu className={className} {...props}>
      <ChatMenu.ChatTitle>
        <StarIcon className="mr-2" />
        Stars
      </ChatMenu.ChatTitle>
      <ChatMenu.ChatList>
        {Array.from({ length: 30 }).map((_, i) => (
          <ChatMenu.ChatItem key={i}>Chat One</ChatMenu.ChatItem>
        ))}
      </ChatMenu.ChatList>
    </ChatMenu.ChatMenu>
  );
};

export default StarMessages;
