'use client';
import {
  AddFileIcon,
  KeyIcon,
  SidebarIcon,
  StarIcon,
} from '@/components/shared/Icons';
import useGlobalContext from '@/hooks/useGlobalContext';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';
import ChatMenu from '../shared/ChatMenu';
import { Button } from '../ui/button';
import FolderItem from './FolderItem';
import SingleChatItem from './SingleChatItem';
import { CHATS } from '@/constants/chats';
import { usePathname } from 'next/navigation';
import withTooltip from '@/HOCs/withTooltip';
const ButtonWithTooltip = withTooltip(Button);
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: never;
}
const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  const { isSidebarClosed, toggleSidebar } = useGlobalContext();
  const pathname = usePathname();
  return (
    <aside
      className={cn(
        'transition-class fixed left-0 top-0 z-50 flex h-full w-full overflow-y-auto overflow-x-hidden lg:w-[250px]',
        className,
        {
          '-translate-x-full opacity-0': isSidebarClosed,
        },
      )}
      {...props}
    >
      <div className="flex h-full flex-1 flex-col bg-background text-foreground">
        <section className="flex h-[60px] w-full shrink-0 items-center justify-between px-4">
          <ButtonWithTooltip
            tooltipContent="Close Sidebar"
            variant={'outline'}
            size={'sm'}
            className="border-none"
          >
            <SidebarIcon
              onClick={toggleSidebar}
              className="size-6 cursor-pointer"
            />
          </ButtonWithTooltip>
          <Link href="/chat">
            <ButtonWithTooltip
              tooltipContent="New Chat"
              variant={'outline'}
              size={'sm'}
              className="border-none"
            >
              <AddFileIcon className="size-6" />
            </ButtonWithTooltip>
          </Link>
        </section>
        {/* Chat List */}
        <section className="flex w-full flex-1 flex-col items-center overflow-auto overflow-x-hidden pl-4 pr-1 *:shrink-0">
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
// const Upgrade = () => {
//   return (
//     <Button className="text-md w-full gap-2">
//       <ProIcon size={18} />
//       Upgrade
//     </Button>
//   );
// };

export default Sidebar;
