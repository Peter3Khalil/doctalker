'use client';
import useGlobalContext from '@/hooks/useGlobalContext';
import { cn } from '@/lib/utils';
import React from 'react';
import { AddFileIcon, SidebarIcon } from '../shared/Icons';
import useThemeProvider from '@/hooks/useThemeProvider';
import { Button } from '../ui/button';
import withTooltip from '@/HOCs/withTooltip';
import { ICON_SIZE } from '@/constants';
import Link from 'next/link';
import Logo from '../shared/Logo';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Switch } from '../ui/switch';
const ButtonWithTooltip = withTooltip(Button);
const SwitchWithTooltip = withTooltip(Switch);
const BUTTON_CLASS_NAME =
  'bg-transparent text-accent-foreground hover:hover-muted-1';
const Header = () => {
  const { isSidebarClosed, toggleSidebar } = useGlobalContext();
  const { theme, toggleTheme } = useThemeProvider();
  return (
    <header
      className={cn(
        'transition-class fixed right-0 top-0 z-30 flex h-[60px] w-full items-center justify-between bg-transparent px-6 backdrop-blur-sm lg:w-[calc(100%-250px)]',
        {
          'lg:w-full': isSidebarClosed,
        },
      )}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn('hidden w-fit items-center gap-1 lg:flex', {
            'lg:hidden': !isSidebarClosed,
          })}
        >
          <ButtonWithTooltip
            tooltipContent="Open Sidebar"
            onClick={toggleSidebar}
            size={'sm'}
            variant="normal"
            className={BUTTON_CLASS_NAME}
          >
            <SidebarIcon size={ICON_SIZE} />
          </ButtonWithTooltip>
          <Link href="/chat">
            <ButtonWithTooltip
              tooltipContent="New Chat"
              variant="normal"
              size={'sm'}
              className={BUTTON_CLASS_NAME}
            >
              <AddFileIcon size={ICON_SIZE} />
            </ButtonWithTooltip>
          </Link>
        </div>
        <Logo href="/chat" variant={'normal'} />
      </div>
      {/* <Button onClick={toggleTheme} variant="secondary">
        {theme === 'dark' ? 'You are in Dark' : 'You are in Light'}
      </Button> */}
      <div className="flex items-center gap-2">
        <SwitchWithTooltip
          asChild={false}
          tooltipContent={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          onCheckedChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <div className="hover-muted-2 cursor-pointer rounded-full p-2">
          <Avatar className="size-8">
            <AvatarImage src="https://picsum.photos/200/200" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
