import React, { FC, useContext } from 'react';
import Wrapper from './Wrapper';
import { cn } from '@/lib/utils';
import { MainContext } from '.';
interface ChatViewerProps extends React.HTMLAttributes<HTMLDivElement> {}
const ChatViewer: FC<ChatViewerProps> = ({ className, ...props }) => {
  const { isShown } = useContext(MainContext);
  return (
    <Wrapper
      className={cn('overflow-auto overflow-x-hidden', className)}
      {...props}
    >
      <div
        className={cn('h-full w-full', {
          'mx-auto w-full max-w-[800px] bg-red-400': !isShown,
        })}
      >
        <div className="h-[600vh] w-full bg-primary"></div>
      </div>
    </Wrapper>
  );
};

export default ChatViewer;
