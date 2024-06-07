'use client';
import withTooltip from '@/HOCs/withTooltip';
import { ICON_SIZE } from '@/constants';
import { logout } from '@/features/authentication';
import { cn } from '@/lib/utils';
import { useGlobalState } from '@/providers/state-provider';
import { LogInIcon } from 'lucide-react';
import Link from 'next/link';
import ThemeChanger from '../ThemeChanger';
import { AddFileIcon, SidebarIcon } from '../shared/Icons';
import Logo from '../shared/Logo';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
const ButtonWithTooltip = withTooltip(Button);

const BUTTON_CLASS_NAME =
  'bg-transparent text-accent-foreground hover:bg-hover-muted transition-class';

const Header = () => {
  const { isSidebarClosed, toggleSidebar } = useGlobalState();

  return (
    <header
      className={cn(
        'transition-class flex h-16 w-full items-center justify-between border-b bg-background px-3 dark:border-muted-foreground/50 md:px-6',
      )}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn('w-fit items-center gap-1 lg:flex', {
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
              className={cn(BUTTON_CLASS_NAME, 'hidden lg:block')}
            >
              <AddFileIcon size={ICON_SIZE} />
            </ButtonWithTooltip>
          </Link>
        </div>
        <Logo href="/chat" variant={'normal'} />
      </div>
      <div className="flex items-center gap-2">
        <ThemeChanger />
        <DropdownMenu>
          <DropdownMenuTrigger className="transition-class rounded-full p-2 hover:bg-hover-muted">
            <Avatar className="size-8">
              <AvatarImage src="https://picsum.photos/200/200" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout} className="gap-2">
              <LogInIcon size={ICON_SIZE} />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
