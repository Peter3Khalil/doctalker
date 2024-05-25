'use client';
import { HideIcon, MenuIcon, ViewIcon } from '@/components/shared/Icons';
import Logo from '@/components/shared/Logo';
import Tooltip from '@/components/shared/Tooltip';
import useGlobalContext from '@/hooks/useGlobalContext';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
interface ChatHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
const ChatHeader: FC<ChatHeaderProps> = ({ className, ...props }) => {
  const { isPdfShown, togglePdf, isSidebarClosed, toggleSidebar } =
    useGlobalContext();
  return (
    <header
      className={cn(
        'flex items-center justify-between bg-accent-foreground p-3 pr-6',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <Tooltip title={`${isSidebarClosed ? 'Open' : 'Close'} sidebar`}>
          <MenuIcon
            onClick={toggleSidebar}
            size={20}
            className={cn('text-accent', {
              'ml-2 rotate-180': isSidebarClosed,
            })}
          />
        </Tooltip>
        <Logo href="/chat" />
      </div>
      <div className="flex items-center gap-2 text-accent">
        <div className="hidden md:block">
          <Tooltip title={isPdfShown ? 'Hide Document' : 'View Document'}>
            {isPdfShown ? (
              <HideIcon onClick={togglePdf} />
            ) : (
              <ViewIcon onClick={togglePdf} />
            )}
          </Tooltip>
        </div>

        <figure className="size-6 rounded-full bg-slate-100"></figure>
      </div>
    </header>
  );
};

export default ChatHeader;
