import useGlobalContext from '@/hooks/useGlobalContext';
import { cn } from '@/lib/utils';
import React, { FC, useEffect, useRef } from 'react';
import Wrapper from './Wrapper';
import { useInView } from 'framer-motion';
interface ChatViewerProps extends React.HTMLAttributes<HTMLDivElement> {}
const ChatViewer: FC<ChatViewerProps> = ({ className, ...props }) => {
  const { isPdfShown, setTap } = useGlobalContext();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.8,
  });
  useEffect(() => {
    if (isInView) {
      setTap('chat');
    }
  }, [isInView, setTap]);
  return (
    <Wrapper
      className={cn('overflow-auto overflow-x-hidden', className)}
      ref={ref}
      id="chat"
      {...props}
    >
      <div
        className={cn('h-full w-full text-accent', {
          'mx-auto w-full max-w-[800px]': !isPdfShown,
        })}
      >
        Chat
      </div>
    </Wrapper>
  );
};

export default ChatViewer;
