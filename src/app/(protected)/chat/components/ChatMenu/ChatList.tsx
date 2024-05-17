import { cn } from '@/lib/utils';
import React, { FC, useContext, useLayoutEffect, useState } from 'react';
import { ChatMenuContext } from '.';

const ChatList: FC<React.HTMLAttributes<HTMLUListElement>> = ({
  children,
  className,
  ...props
}) => {
  const { collapse } = useContext(ChatMenuContext);
  const [height, setHeight] = useState(0);
  const ref = React.useRef<HTMLUListElement>(null);
  useLayoutEffect(() => {
    const list = ref.current;
    if (list) {
      setHeight(list.scrollHeight);
    }
  }, [collapse]);
  return (
    <ul
      ref={ref}
      className={cn(
        'chat-list hide-scrollbar w-full overflow-x-hidden pl-2 transition-all duration-500 ease-in-out',
        className,
        {
          'opacity-0': collapse,
          'opacity-100': !collapse,
        },
      )}
      style={{ height: collapse ? 0 : height }}
      {...props}
    >
      {children}
    </ul>
  );
};

export default ChatList;
