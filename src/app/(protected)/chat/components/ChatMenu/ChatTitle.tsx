'use client';
import { ArrowRightIcon } from '@/components/shared/Icons';
import { cn } from '@/lib/utils';
import React, { FC, useContext } from 'react';
import { ChatMenuContext } from '.';

const ChatTitle: FC<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  const { collapse, toggleCollapse } = useContext(ChatMenuContext);
  return (
    <h6
      onClick={toggleCollapse}
      className={cn(
        'text-md sticky top-0 mb-2 flex cursor-pointer items-center justify-between rounded bg-accent-foreground/50 px-2 py-2 font-semibold text-primary-foreground/50',
        className,
        {
          'bg-accent-foreground text-primary-foreground': !collapse,
        },
      )}
      {...props}
    >
      {children}
      <ArrowRightIcon
        className={cn({
          'rotate-90 transform': !collapse,
        })}
      />
    </h6>
  );
};

export default ChatTitle;
