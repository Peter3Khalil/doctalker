'use client';
import React, { FC, createContext, useCallback, useState } from 'react';
import ChatList from './ChatList';
import ChatTitle from './ChatTitle';
import ChatItem from './ChatItem';
import { cn } from '@/lib/utils';
type ChatMenuContextType = {
  collapse: boolean;
  toggleCollapse: () => void;
};
export const ChatMenuContext = createContext<ChatMenuContextType>({
  collapse: true,
  toggleCollapse: () => null,
});

const ChatMenu: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
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

ChatMenu.displayName = 'Chat Menu';
ChatList.displayName = 'Chat List';
ChatTitle.displayName = 'Chat Title';
ChatItem.displayName = 'Chat Item';
export { ChatList, ChatMenu, ChatTitle, ChatItem };
