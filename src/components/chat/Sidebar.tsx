'use client';
import withTooltip from '@/HOCs/withTooltip';
import {
  AddFileIcon,
  KeyIcon,
  SidebarIcon,
  StarIcon,
} from '@/components/shared/Icons';
import { ICON_SIZE } from '@/constants';
import { CHATS } from '@/constants/chats';
import { cn } from '@/lib/utils';
import { useGlobalState } from '@/providers/state-provider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import ChatMenu from '../shared/ChatMenu';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import FolderItem from './FolderItem';
import SingleChatItem from './SingleChatItem';
const ButtonWithTooltip = withTooltip(Button);
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: never;
}

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  const { isSidebarClosed, toggleSidebar } = useGlobalState();

  const pathname = usePathname();

  return (
    <aside
      className={cn(
        'transition-class fixed left-0 top-0 z-30 flex h-full w-full overflow-y-auto overflow-x-hidden lg:static lg:w-[250px]',
        className,
        {
          'w-0 min-w-0 lg:w-0': isSidebarClosed,
        },
      )}
      {...props}
    >
      <div className="flex flex-1 flex-col bg-background text-foreground">
        <section className="flex h-[60px] w-full shrink-0 items-center justify-between px-4">
          <ButtonWithTooltip
            tooltipContent="Close Sidebar"
            variant={'normal'}
            size={'sm'}
            onClick={toggleSidebar}
            className="transition-class hover:bg-hover-accent"
          >
            <SidebarIcon size={ICON_SIZE} />
          </ButtonWithTooltip>
          <Link href="/chat">
            <ButtonWithTooltip
              tooltipContent="New Chat"
              variant={'normal'}
              size={'sm'}
              className="transition-class hover:bg-hover-accent"
            >
              <AddFileIcon size={ICON_SIZE} />
            </ButtonWithTooltip>
          </Link>
        </section>
        {/* Chat List */}
        <ScrollArea className="flex-1">
          <section className="flex h-full w-full flex-col items-center pl-4 pr-1 *:shrink-0">
            <ChatMenu className="hide-scrollbar w-full">
              <ChatMenu.ChatTitle>Chats</ChatMenu.ChatTitle>
              <ChatMenu.ChatList className="w-full">
                {CHATS.map((item, i) => (
                  <>
                    {Array.isArray(item.chatName) ? (
                      <FolderItem key={i} name={item.chatName[0]}>
                        {item.chatName.map((subItem, j) => (
                          <SingleChatItem
                            isActive={pathname.includes(subItem)}
                            key={j}
                          >
                            {subItem}
                          </SingleChatItem>
                        ))}
                      </FolderItem>
                    ) : (
                      <Link key={item.id} href={`/chat/${item.id}`} passHref>
                        <SingleChatItem
                          isActive={pathname.includes(
                            item.id as unknown as string,
                          )}
                        >
                          {item.chatName}
                        </SingleChatItem>
                      </Link>
                    )}
                  </>
                ))}
              </ChatMenu.ChatList>
            </ChatMenu>
            <ChatMenu className="hide-scrollbar w-full">
              <ChatMenu.ChatTitle icon={StarIcon}>Stars</ChatMenu.ChatTitle>
              <ChatMenu.ChatList className="w-full">
                <SingleChatItem>Starred 1</SingleChatItem>
                <SingleChatItem>Starred 2</SingleChatItem>
                <SingleChatItem>Starred 3</SingleChatItem>
                <SingleChatItem>Starred 4</SingleChatItem>
              </ChatMenu.ChatList>
            </ChatMenu>
          </section>
        </ScrollArea>
        {/* CTA */}
        <section className="flex min-h-[60px] w-full shrink-0 items-center justify-center bg-inherit px-3 py-2">
          <Button className="gradient dark:custom-shadow w-full gap-2">
            <KeyIcon size={18} />
            Upgrade plan
          </Button>
        </section>
      </div>
      {/* Blank Area */}
      <div
        onClick={toggleSidebar}
        className="h-full w-[70px] max-w-[20%] bg-transparent lg:hidden"
      ></div>
    </aside>
  );
};

export default Sidebar;
