import React, { FC } from 'react';
import * as ChatMenu from './ChatMenu';
import { ChatIcon } from '@/components/shared/Icons';

const AllChats: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <ChatMenu.ChatMenu className={className} {...props}>
      <ChatMenu.ChatTitle>
        <ChatIcon className="mr-2" />
        Chats
      </ChatMenu.ChatTitle>
      <ChatMenu.ChatList>
        {Array.from({ length: 70 }).map((_, i) => (
          <ChatMenu.ChatItem key={i}>Chat</ChatMenu.ChatItem>
        ))}
      </ChatMenu.ChatList>
    </ChatMenu.ChatMenu>
  );
};

export default AllChats;
