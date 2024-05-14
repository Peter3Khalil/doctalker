import Reveal from '@/components/Animation/Reveal';
import Section from '@/components/Layouts/Section';
import { FEATURES } from '@/constants/features';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import FeatureCard from './FeatureCard';
import SectionHeading from '@/components/shared/SectionHeading';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Features: FC<ComponentProps> = ({ className, ...props }) => {
  return (
    <Section className={cn(className)} {...props}>
      <SectionHeading>Features</SectionHeading>
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
            <FeatureCard
              className="border border-accent/20 bg-foreground/30"
              feature={feature}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Features;
