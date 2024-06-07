'use client';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FC } from 'react';
interface SpecificChatProps {
  params: {
    id: string;
  };
}

const SpecificChat: FC<SpecificChatProps> = () => {
  return (
    <ResizablePanelGroup className="flex h-full w-full" direction="horizontal">
      <ResizablePanel minSize={35} defaultSize={50}>
        <ScrollArea className="h-full">
          <section className="flex h-full flex-col gap-3 px-3">
            <div className="h-12 w-full bg-primary"></div>
          </section>
        </ScrollArea>
      </ResizablePanel>
      {/* <ResizableHandle className="w-1.5 hover:bg-primary" />
      <ResizablePanel className="order-1" minSize={35} defaultSize={50}>
        <section className="h-full min-w-[200px] bg-slate-600"></section>
      </ResizablePanel> */}
    </ResizablePanelGroup>
  );
};

export default SpecificChat;
