'use client';
import { cn } from '@/lib/utils';
import React, { createContext, useCallback, useState } from 'react';
import ChatItem from './ChatItem';
import ChatList from './ChatList';
import ChatTitle from './ChatTitle';
type ChatMenuContextType = {
  collapse: boolean;
  toggleCollapse: () => void;
};
export const ChatMenuContext = createContext<ChatMenuContextType>({
  collapse: true,
  toggleCollapse: () => null,
});

const ChatMenu = ({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const [collapse, setCollapse] = useState(true);
  const toggleCollapse = useCallback(
    () => setCollapse((prevCollapse) => !prevCollapse),
    [],
  );
  return (
    <ChatMenuContext.Provider value={{ collapse, toggleCollapse }}>
      <div className={cn('min-h-0 w-full pr-1 text-xl', className)} {...props}>
        {children}
      </div>
    </ChatMenuContext.Provider>
  );
};
ChatMenu.ChatTitle = ChatTitle;
ChatMenu.ChatList = ChatList;
ChatMenu.ChatItem = ChatItem;

export default ChatMenu;
