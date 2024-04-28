import Section from '@/components/Layouts/Section';
import { CAPABILITIES } from '@/constants/capabilities';
import { CARDS } from '@/constants/cards';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Reveal from '../../../components/Animation/Reveal';
import GradientButton from '../../../components/shared/GradientButton';
import FeatureCard from './CapabilityCard';
import Card from './Card';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Capabilities: FC<ComponentProps> = ({ className, ...props }) => {
  const { isMatched: isMobile } = useMediaQuery({ width: 768 });
  return (
    <section
      className={cn(
        'flex min-h-full flex-col gap-6 px-6 py-12 lg:px-20',
        className,
      )}
      {...props}
    >
      {CAPABILITIES.map((capability, index) => (
        <Reveal rootMargin={isMobile ? '-200px' : '-300px'} key={index}>
          <FeatureCard capability={capability} isOdd={index % 2 === 0} />
        </Reveal>
      ))}
      <Section>
        <h2 className="bg-gradient-to-r from-primary to-background bg-clip-text text-center text-2xl font-bold text-transparent lg:text-3xl">
          Accelerate your work.
        </h2>
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:min-h-full lg:grid-cols-3">
          {CARDS.map((card, index) => (
            <Reveal
              duration={0.5}
              key={index}
              delay={isMobile ? 0 : 0.6 * index}
              rootMargin={isMobile ? '-100px' : '-300px'}
            >
              <Card card={card} />
            </Reveal>
          ))}
        </div>
        <GradientButton className="custom-shadow">Get Started</GradientButton>
      </Section>
    </section>
  );
};

export default Capabilities;
