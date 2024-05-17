'use client';
import { ArrowRightIcon, ChatIcon } from '@/components/shared/Icons';
import useResizeObserver from '@/hooks/useResizeObserver';
import { cn } from '@/lib/utils';
import React, { FC, useContext, useRef } from 'react';
import { ChatMenuContext } from '.';
interface ChatTitleProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  children?: string;
  icon?: JSX.Element;
}
const ChatTitle: FC<ChatTitleProps> = ({
  children,
  icon = <ChatIcon size={16} className="shrink-0" />,
  className,
  ...props
}) => {
  const { collapse, toggleCollapse } = useContext(ChatMenuContext);
  const ref = useRef<HTMLParagraphElement>(null);
  const { hasOverFlow } = useResizeObserver({ ref });
  return (
    <h6
      id={ChatTitle.name}
      onClick={toggleCollapse}
      className={cn(
        'sticky top-0 z-10 mb-2  flex w-full cursor-pointer items-center gap-2 rounded bg-accent-foreground px-2 py-2 text-lg font-semibold text-primary-foreground',
        {
          'opacity-50': collapse,
          'overflow-hidden': hasOverFlow,
        },
        className,
      )}
      {...props}
    >
      <div ref={ref} className="flex w-full items-center gap-2 overflow-hidden">
        {icon}
        <p
          className={cn('w-full text-nowrap', {
            'gradient from-transparent via-background to-background bg-clip-text':
              hasOverFlow,
          })}
        >
          {children}
        </p>
      </div>

      <ArrowRightIcon
        className={cn('shrink-0', {
          'rotate-90 transform': !collapse,
        })}
      />
    </h6>
  );
};

export default ChatTitle;
