'use client';
import { ChatWithFolderIcon } from '@/components/shared/Icons';
import React, { FC } from 'react';
import ChatMenu from '@/components/shared/ChatMenu';
interface FolderItemProps extends React.HtmlHTMLAttributes<HTMLLIElement> {
  name?: string;
}

const FolderItem: FC<FolderItemProps> = ({
  children,
  className,
  name = 'Folder',
  ...props
}) => {
  return (
    <ChatMenu.ChatItem className={className} {...props}>
      <ChatMenu>
        <ChatMenu.ChatTitle
          icon={ChatWithFolderIcon}
          className="static w-full border-l-4 border-primary text-[0.8em]"
        >
          {name}
        </ChatMenu.ChatTitle>
        <ChatMenu.ChatList className="text-[0.85em]">
          {children}
        </ChatMenu.ChatList>
      </ChatMenu>
    </ChatMenu.ChatItem>
  );
};

export default FolderItem;
