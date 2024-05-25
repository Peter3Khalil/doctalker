'use client';
import useGlobalContext from '@/hooks/useGlobalContext';
import { cn } from '@/lib/utils';
import React from 'react';
import { AddFileIcon, SidebarIcon } from '../shared/Icons';

const Header = () => {
  const { isSidebarClosed, toggleSidebar } = useGlobalContext();
  return (
    <header
      className={cn(
        'transition-class fixed right-0 top-0 z-30 flex h-[60px] w-full items-center bg-primary lg:w-[calc(100%-250px)]',
        {
          'lg:w-full': isSidebarClosed,
        },
      )}
    >
      <div className="flex w-fit items-center gap-2">
        <SidebarIcon
          onClick={toggleSidebar}
          className={cn('size-6 cursor-pointer', {
            'lg:hidden': !isSidebarClosed,
          })}
        />
        <AddFileIcon
          className={cn('size-6 cursor-pointer', {
            'lg:hidden': !isSidebarClosed,
          })}
        />
      </div>
    </header>
  );
};

export default Header;
