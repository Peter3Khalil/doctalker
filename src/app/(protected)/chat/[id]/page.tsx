'use client';
import Message from '@/components/chat/Message';
import { DislikeIcon, LikeIcon, StarIcon } from '@/components/shared/Icons';
import Tooltip from '@/components/shared/Tooltip';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { FC, useState } from 'react';
interface SpecificChatProps {
  params: {
    id: string;
  };
}

const SpecificChat: FC<SpecificChatProps> = () => {
  const [open] = useState(true);

  return (
    <div className="flex h-full w-full">
      <section className="flex h-full flex-1 shrink-0 flex-col gap-2">
        <ScrollArea className="w-full flex-1">
          <div className="w-full p-6">
            <div className="mx-auto flex h-full w-full flex-col gap-4 md:max-w-[900px]">
              <Message>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequatur blanditiis consequuntur nam, voluptatem tempore
                repellat, maiores unde cupiditate officiis aliquam debitis
                dolorem qui at explicabo ratione illo dolore. Temporibus,
                reprehenderit dignissimos! Tempore earum exercitationem aperiam
                quis esse, quaerat similique
              </Message>
              <section className="flex w-full flex-col gap-1">
                <Message variant={'secondary'}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consequatur blanditiis consequuntur nam, voluptatem tempore
                  repellat, maiores unde cupiditate officiis aliquam debitis
                  dolorem qui at explicabo ratione illo dolore. Temporibus,
                  reprehenderit dignissimos! Tempore earum exercitationem
                  aperiam quis esse, quaerat similique
                </Message>
                <div className="mt-2 flex w-full items-center">
                  <Tooltip title="Star Message" asChild>
                    <Button
                      className="transition-class aspect-square size-fit rounded-full p-2 hover:bg-hover-muted"
                      variant={'normal'}
                    >
                      <StarIcon size={16} className="" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Like Message" asChild>
                    <Button
                      className="transition-class aspect-square size-fit rounded-full p-2 hover:bg-hover-muted"
                      variant={'normal'}
                    >
                      <LikeIcon size={16} className="" />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Dislike Message" asChild>
                    <Button
                      className="transition-class aspect-square size-fit rounded-full p-2 hover:bg-hover-muted"
                      variant={'normal'}
                    >
                      <DislikeIcon size={16} className="" />
                    </Button>
                  </Tooltip>
                </div>
              </section>
            </div>
          </div>
        </ScrollArea>
        <div className="mx-auto flex w-full items-center p-2 md:max-w-[900px]">
          <Textarea className="max-h-[160] min-h-[60px] w-full resize-y" />
          <Button className="ml-2">Send</Button>
        </div>
      </section>
      <section
        className={cn('transition-class h-full flex-1 shrink-0', {
          'flex-none': !open,
        })}
      >
        <iframe
          src={cn(
            `https://docs.google.com/gview?url=https://doctalker-app.s3.us-east-1.amazonaws.com/6665e27a6b6df5d9e90b8513/Chapter%232.pdf&embedded=true`,
          )}
          className={cn('h-full w-full')}
        ></iframe>
      </section>
    </div>
  );
};

export default SpecificChat;
