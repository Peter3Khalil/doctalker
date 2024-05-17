'use client';
import { ChatWithFolderIcon } from '@/components/shared/Icons';
import React, { FC } from 'react';
import * as ChatMenu from '../../../../../../components/shared/ChatMenu';
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
      <ChatMenu.ChatMenu>
        <ChatMenu.ChatTitle
          icon={<ChatWithFolderIcon className="shrink-0" size={14} />}
          className="static w-full border-l-2 text-sm"
        >
          {name}
        </ChatMenu.ChatTitle>
        <ChatMenu.ChatList>{children}</ChatMenu.ChatList>
      </ChatMenu.ChatMenu>
    </ChatMenu.ChatItem>
  );
};

export default FolderItem;
