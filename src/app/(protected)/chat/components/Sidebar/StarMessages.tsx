import { StarIcon } from '@/components/shared/Icons';
import React, { FC } from 'react';
import ChatMenu from '@/components/shared/ChatMenu';
import SingleChatItem from './components/SingleChatItem';
const StarMessages: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <ChatMenu className={className} {...props}>
      <ChatMenu.ChatTitle icon={<StarIcon size={16} />}>
        Stars
      </ChatMenu.ChatTitle>
      <ChatMenu.ChatList>
        {Array.from({ length: 30 }).map((_, i) => (
          <SingleChatItem key={i}>
            Peter Peter Peter Peter Peter Peter Peter Peter
          </SingleChatItem>
        ))}
      </ChatMenu.ChatList>
    </ChatMenu>
  );
};

export default StarMessages;
