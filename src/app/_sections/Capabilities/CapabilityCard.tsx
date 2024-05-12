import { cn } from '@/lib/utils';
import { type Capability } from '@/types';
import Image from 'next/image';
import React, { FC } from 'react';
import Reveal from '../../../components/Animation/Reveal';
import GradientButton from '../../../components/shared/GradientButton';
import SectionHeading from '@/components/shared/SectionHeading';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {
  capability: Capability;
  isOdd?: boolean;
}
const CapabilityCard: FC<ComponentProps> = ({ capability, isOdd }) => {
  const firstWord = capability.name.split(' ')[0];
  const restOfWords = capability.name.split(' ').slice(1).join(' ');
  return (
    <article className="flex flex-col items-center gap-10 rounded-lg bg-accent-foreground px-6 py-12 text-accent lg:px-16">
      <SectionHeading>{capability.title}</SectionHeading>
      <div className="flex w-full flex-col gap-6 md:flex-row md:gap-12 lg:h-[400px]">
        <div
          className={cn(
            'custom-shadow aspect-square h-[200px] rounded-2xl md:h-full md:flex-1',
            {
              'md:order-2': isOdd,
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
              src={capability.image}
              alt="capability"
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
            {capability.description}
          </p>
          <GradientButton>Start Chatting</GradientButton>
        </div>
      </div>
    </article>
  );
};

export default CapabilityCard;
