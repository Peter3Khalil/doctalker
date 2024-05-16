'use client';
import { USE_CASES } from '@/constants/useCases';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Reveal from '@/components/Animation/Reveal';
import TargetUsers from './TargetUsers';
import FeatureCard from './UseCaseCard';
import Section from '@/components/Layouts/Section';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const UseCases: FC<ComponentProps> = ({ className, ...props }) => {
  const { isMatched: isMobile } = useMediaQuery({ maxWidth: 768 });
  return (
    <Section className={cn('bg-foreground', className)} {...props}>
      {USE_CASES.map((useCase, index) => (
        <Reveal rootMargin={isMobile ? '-200px' : '-300px'} key={index}>
          <FeatureCard useCase={useCase} isOdd={index % 2 === 0} />
        </Reveal>
      ))}
      <TargetUsers />
    </Section>
  );
};

export default UseCases;
