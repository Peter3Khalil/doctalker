import ProFeature from '@/components/ProFeature';
import { OpenPanelIcon, ProIcon } from '@/components/shared/Icons';
import { Button } from '@/components/ui/button';
import AllChats from './AllChats';
import StarMessages from './StarMessages';
import { FC, useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import Tooltip from '@/components/shared/Tooltip';
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
  const [closed, setClosed] = useState(false);
  const toggle = useCallback(() => setClosed((prev: boolean) => !prev), []);
  return (
    <div
      className={cn('flex h-full w-fit', {
        'gap-2': !closed,
      })}
    >
      <div
        className={cn('transition-class h-full w-[300px] overflow-x-hidden', {
          'invisible w-0': closed,
        })}
      >
        <aside
          className={cn(
            'transition-class visible grid h-full w-[300px] grid-cols-1 grid-rows-[auto,1fr,auto] gap-4 overflow-x-hidden bg-foreground px-3 py-4 text-primary-foreground',
            className,
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
      </div>
      <div className="flex h-full items-center justify-center text-accent">
        <Tooltip title={`${closed ? 'Open' : 'Close'} sidebar`}>
          <OpenPanelIcon
            onClick={toggle}
            size={20}
            className={cn({
              'ml-2 rotate-180': closed,
            })}
          />
        </Tooltip>
      </div>
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
