import Image from 'next/image';
import React, { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Feature } from '@/types';
import { cn } from '@/lib/utils';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {
  feature: Feature;
  isOdd?: boolean;
}
const FeatureCard: FC<ComponentProps> = ({ feature, isOdd }) => {
  return (
    <article className="flex min-h-full flex-col items-center gap-10 rounded-lg bg-accent-foreground px-6 py-12 text-accent lg:px-16">
      <h2 className="text-center text-xl font-bold lg:text-3xl bg-gradient-to-r from-primary to-background bg-clip-text text-transparent">
        {feature.title}
      </h2>
      <div className="flex h-auto w-full flex-col gap-12 lg:h-[400px] md:flex-row">
        <div
          className={cn(
            'aspect-square w-full rounded-2xl bg-foreground p-6 md:h-full md:flex-1',
            {
              'lg:order-2': isOdd,
            },
          )}
        >
          <div className="relative img-card h-full w-full rounded-[inherit]">
            <Image
              src={feature.image}
              alt="Feature"
              layout="fill"
              className="absolute left-0 top-0 h-full w-full rounded-[inherit] object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3">
          <h3 className="text-2xl font-bold">{feature.name}</h3>
          <p className="text-sm text-muted/70">{feature.description}</p>
          <Button className="mt-12 w-fit bg-gradient-to-l from-primary to-foreground px-8 py-6 text-lg transition-all duration-500 ease-in-out hover:scale-110">
            Start Chatting
          </Button>
        </div>
      </div>
    </article>
  );
};

export default FeatureCard;
