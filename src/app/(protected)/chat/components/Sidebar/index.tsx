import ProFeature from '@/components/ProFeature';
import { ProIcon } from '@/components/shared/Icons';
import { Button } from '@/components/ui/button';
import useGlobalContext from '@/hooks/useGlobalContext';
import { cn } from '@/lib/utils';
import { FC, useCallback } from 'react';
import AllChats from './AllChats';
import StarMessages from './StarMessages';
const chats: (string | string[])[] = [
  'Chat 1',
  'Chat 2',
  [
    `
  Peterdddddddd
  Peterdddddddd
  Peterdddddddd
  
  `,
    'Chat 3',
  ],
];
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: never;
}
const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  const { isSidebarClosed, toggleSidebar } = useGlobalContext();
  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.currentTarget.classList.remove('scroll-opacity-0');
    },
    [],
  );
  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.currentTarget.classList.add('scroll-opacity-0');
    },
    [],
  );
  return (
    <div
      className={cn(
        'transition-class fixed left-0 top-0 flex h-full w-full gap-0 overflow-x-hidden md:static md:mr-3 md:w-[300px] md:gap-2',
        {
          'w-0 md:mr-0 md:w-0': isSidebarClosed,
        },
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <aside
        className={cn(
          'transition-class visible grid h-full w-full grid-cols-1 grid-rows-[auto,1fr,auto] gap-4 overflow-x-hidden bg-accent-foreground px-3 py-4 text-primary-foreground',
          className,
          {
            'invisible w-0': isSidebarClosed,
          },
        )}
        {...props}
      >
        <Button variant="secondary" className="w-full shrink-0">
          New Chat
        </Button>
        <div className="overflow-auto">
          <AllChats chats={chats} />
          <StarMessages />
        </div>
        <ProFeature role="free">
          <Upgrade />
        </ProFeature>
      </aside>
      <div
        className="h-full w-[100px] bg-foreground/50 md:hidden"
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};
const Upgrade = () => {
  return (
    <Button className="text-md w-full gap-2">
      <ProIcon size={18} />
      Upgrade
    </Button>
  );
};

export default Sidebar;
