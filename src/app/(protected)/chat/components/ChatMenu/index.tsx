'use client';
import React, { FC, createContext, useCallback, useState } from 'react';
import ChatList from './ChatList';
import ChatTitle from './ChatTitle';
import ChatItem from './ChatItem';
type ChatMenuContextType = {
  collapse: boolean;
  toggleCollapse: () => void;
};
export const ChatMenuContext = createContext<ChatMenuContextType>({
  collapse: false,
  toggleCollapse: () => null,
});

const ChatMenu: FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  const [collapse, setCollapse] = useState(false);
  const toggleCollapse = useCallback(
    () => setCollapse((prevCollapse) => !prevCollapse),
    [],
  );
  return (
    <ChatMenuContext.Provider value={{ collapse, toggleCollapse }}>
      <div className="max-h-full w-full overflow-auto pr-1">{children}</div>
    </ChatMenuContext.Provider>
  );
};

ChatMenu.displayName = 'Chat Menu';
ChatList.displayName = 'Chat List';
ChatTitle.displayName = 'Chat Title';
ChatItem.displayName = 'Chat Item';
export { ChatList, ChatMenu, ChatTitle, ChatItem };
