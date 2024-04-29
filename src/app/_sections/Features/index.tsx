import Reveal from '@/components/Animation/Reveal';
import Section from '@/components/Layouts/Section';
import { FEATURES } from '@/constants/features';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import FeatureCard from './FeatureCard';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Features: FC<ComponentProps> = ({ className, ...props }) => {
  return (
    <Section className={cn('bg-transparent', className)} {...props}>
      <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-3 lg:min-h-full lg:grid-cols-4">
        {FEATURES.map((feature, index) => (
          <Reveal
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            key={index}
            delay={0.2 * index}
            duration={1}
            rootMargin="-10px"
          >
            <FeatureCard feature={feature} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Features;
