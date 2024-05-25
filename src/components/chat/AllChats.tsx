import ChatMenu from '@/components/shared/ChatMenu';
import React, { FC } from 'react';
import FolderItem from './FolderItem';
import SingleChatItem from './SingleChatItem';
interface AllChatsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  chats: (string | string[])[];
}
const AllChats: FC<AllChatsProps> = ({ className, chats, ...props }) => {
  return (
    <ChatMenu className={className} {...props}>
      <ChatMenu.ChatTitle>Chat</ChatMenu.ChatTitle>
      <ChatMenu.ChatList>
        {chats.map((chat, i) => {
          if (Array.isArray(chat)) {
            return (
              <FolderItem key={i} name={chat[0]}>
                {chat.map((c, j) => (
                  <SingleChatItem key={j}>{c}</SingleChatItem>
                ))}
              </FolderItem>
            );
          }
          return <SingleChatItem key={i}>{chat}</SingleChatItem>;
        })}
      </ChatMenu.ChatList>
    </ChatMenu>
  );
};

export default AllChats;
