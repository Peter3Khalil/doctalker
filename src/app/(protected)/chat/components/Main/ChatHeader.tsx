'use client';
import Logo from '@/components/shared/Logo';
import { cn } from '@/lib/utils';
import React, { FC, useContext } from 'react';
import { MainContext } from '.';
import Tooltip from '@/components/shared/Tooltip';
import { HideIcon, ViewIcon } from '@/components/shared/Icons';
interface ChatHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
const ChatHeader: FC<ChatHeaderProps> = ({ className, ...props }) => {
  const { toggle, isShown } = useContext(MainContext);
  return (
    <header
      className={cn(
        'flex items-center justify-between border-b bg-accent-foreground p-3 pr-6',
        className,
      )}
      {...props}
    >
      <Logo href="/chat" />
      <div className="flex items-center gap-2 text-accent">
        <Tooltip title={isShown ? 'Hide Document' : 'View Document'}>
          {isShown ? (
            <HideIcon onClick={toggle} />
          ) : (
            <ViewIcon onClick={toggle} />
          )}
        </Tooltip>

        <figure className="size-6 rounded-full bg-slate-100"></figure>
      </div>
    </header>
  );
};

export default ChatHeader;
