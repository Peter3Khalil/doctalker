import React, { FC } from 'react';
import * as ChatMenu from '../../../../../components/shared/ChatMenu';
import FolderItem from './components/FolderItem';
import SingleChatItem from './components/SingleChatItem';
interface AllChatsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  chats: (string | string[])[];
}
const AllChats: FC<AllChatsProps> = ({ className, chats, ...props }) => {
  return (
    <ChatMenu.ChatMenu className={className} {...props}>
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
    </ChatMenu.ChatMenu>
  );
};

export default AllChats;
