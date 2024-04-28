import { CARDS } from '@/constants/cards';
import { FEATURES } from '@/constants/features';
import useMediaQuery from '@/hooks/useMediaQuery';
import React, { FC } from 'react';
import Reveal from '../Animation/Reveal';
import FeatureCard from './FeatureCard';
import { cn } from '@/lib/utils';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Features: FC<ComponentProps> = ({ className, ...props }) => {
  const { isMatched: isMobile } = useMediaQuery({ width: 640 });
  return (
    <section
      className={cn(
        'flex min-h-full flex-col gap-6 px-6 py-12 lg:px-20',
        className,
      )}
      {...props}
    >
      {FEATURES.map((feature, index) => (
        <Reveal rootMargin={isMobile?"-200px":"-400px"} key={index} className="">
          <FeatureCard feature={feature} isOdd={index % 2 === 0} />
        </Reveal>
      ))}
      <section className="flex flex-col items-center gap-10 rounded-lg bg-accent-foreground px-6 py-12 text-accent lg:px-16">
        <h2 className="bg-gradient-to-r from-primary to-background bg-clip-text text-center text-2xl font-bold text-transparent lg:text-3xl">
          Accelerate your work.
        </h2>
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 lg:min-h-full">
          {CARDS.map((card, index) => (
            <Reveal
              duration={0.5}
              key={index}
              delay={isMobile ? 0 : 0.6 * index}
              rootMargin={isMobile ? '-100px' : '-400px'}
            >
              <article className="flex h-full w-full flex-col items-center gap-8 rounded-lg border border-primary bg-foreground px-6 py-10 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-lg bg-primary p-2">
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                </div>
                <p className="text-base text-accent/70 md:text-lg">
                  {card.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Features;
