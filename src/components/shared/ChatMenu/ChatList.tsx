import { cn } from '@/lib/utils';
import React, { FC, useContext } from 'react';
import { ChatMenuContext } from '.';

const ChatList: FC<React.HTMLAttributes<HTMLUListElement>> = ({
  children,
  className,
  ...props
}) => {
  const { collapse } = useContext(ChatMenuContext);

  return (
    <ul
      className={cn(
        'flex w-full flex-col gap-2 overflow-x-hidden pl-2 transition-all duration-500 ease-in-out',
        className,
        {
          'h-0 opacity-0': collapse,
          'opacity-100': !collapse,
        },
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

export default ChatList;
