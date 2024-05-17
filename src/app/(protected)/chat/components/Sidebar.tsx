import ProFeature from '@/components/ProFeature';
import { ProIcon } from '@/components/shared/Icons';
import { Button } from '@/components/ui/button';
import AllChats from './AllChats';
import StarMessages from './StarMessages';

const Sidebar = () => {
  return (
    <aside className="grid h-full w-[300px] grid-cols-1 grid-rows-[auto,1fr,auto] gap-4 overflow-x-hidden bg-foreground px-3 py-4 text-primary-foreground">
      <Button variant="secondary" className="w-full shrink-0">
        New Chat
      </Button>
      <div className="hide-scrollbar overflow-auto">
        <AllChats />
        <StarMessages />
      </div>
      <ProFeature role="free">
        <Upgrade />
      </ProFeature>
    </aside>
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
