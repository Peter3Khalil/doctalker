import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Feature } from '@/types';
import Image from 'next/image';
import React, { FC } from 'react';
import Reveal from '../Animation/Reveal';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {
  feature: Feature;
  isOdd?: boolean;
}
const FeatureCard: FC<ComponentProps> = ({ feature, isOdd }) => {
  const firstWord = feature.name.split(' ')[0];
  const restOfWords = feature.name.split(' ').slice(1).join(' ');
  return (
    <article className="flex flex-col items-center gap-10 rounded-lg bg-accent-foreground px-6 py-12 text-accent lg:px-16">
      <h2 className="bg-gradient-to-r from-primary to-background bg-clip-text text-center text-2xl font-bold text-transparent lg:text-3xl">
        {feature.title}
      </h2>
      <div className="flex w-full flex-col gap-3 md:flex-row md:gap-12 lg:h-[400px]">
        <div
          className={cn(
            'custom-shadow aspect-square h-[200px] rounded-2xl md:h-full md:flex-1',
            {
              'lg:order-2': isOdd,
            },
          )}
        >
          <Reveal
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            duration={1.5}
            className="img-card relative h-full w-full rounded-[inherit]"
          >
            <Image
              src={feature.image}
              alt="Feature"
              layout="fill"
              className="absolute left-0 top-0 h-full w-full rounded-[inherit] object-cover object-center"
            />
          </Reveal>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-3">
          <h3 className="text-2xl font-semibold md:text-3xl">
            <span className="gradient from-background to-primary bg-clip-text font-bold text-transparent">
              {firstWord}
            </span>{' '}
            {restOfWords}
          </h3>
          <p className="text-base text-muted/70 md:text-lg">
            {feature.description}
          </p>
          <Button className="gradient mt-6 w-fit px-8 py-6 text-lg transition-all duration-500 ease-in-out hover:scale-110 md:mt-12">
            Start Chatting
          </Button>
        </div>
      </div>
    </article>
  );
};

export default FeatureCard;
