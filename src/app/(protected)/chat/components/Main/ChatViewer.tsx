import useGlobalContext from '@/hooks/useGlobalContext';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Wrapper from './Wrapper';
interface ChatViewerProps extends React.HTMLAttributes<HTMLDivElement> {}
const ChatViewer: FC<ChatViewerProps> = ({ className, ...props }) => {
  const { isPdfShown } = useGlobalContext();
  return (
    <Wrapper
      className={cn('overflow-auto overflow-x-hidden', className)}
      {...props}
    >
      <div
        className={cn('h-full w-full', {
          'mx-auto w-full max-w-[800px] bg-red-400': !isPdfShown,
        })}
      >
        <div className="h-[600vh] w-full bg-primary"></div>
      </div>
    </Wrapper>
  );
};

export default ChatViewer;
