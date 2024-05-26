'use client';
import { AddFileIcon, SidebarIcon } from '@/components/shared/Icons';
import useGlobalContext from '@/hooks/useGlobalContext';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';
// const chats: (string | string[])[] = [
//   'Chat 1',
//   'Chat 2',
//   [
//     `
//   Peterdddddddd
//   Peterdddddddd
//   Peterdddddddd

//   `,
//     'Chat 3',
//   ],
// ];
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: never;
}
const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  const { isSidebarClosed, toggleSidebar } = useGlobalContext();
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
      <div className="flex h-full flex-1 flex-col bg-accent-foreground text-accent">
        <section className="flex h-[60px] w-full shrink-0 items-center justify-between px-4">
          <SidebarIcon
            onClick={toggleSidebar}
            className="size-6 cursor-pointer"
          />
          <Link href="/chat">
            <AddFileIcon className="size-6" />
          </Link>
        </section>
        {/* Chat List */}
        <section className="flex flex-1 items-center justify-center overflow-auto pl-4 pr-1">
          <div className="h-[600vh] w-full bg-primary"></div>
        </section>
        {/* CTA */}
        <section className="flex h-[60px] w-full shrink-0 items-center justify-center bg-accent"></section>
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
