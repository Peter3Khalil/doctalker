'use client';
import Reveal from '@/components/animation/Reveal';
import { USE_CASES } from '@/constants/useCases';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import TargetUsers from './TargetUsers';
import UseCaseCard from '../UseCases/UseCaseCard';
import Section from '@/components/layouts/Section';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}

const UseCases: FC<ComponentProps> = ({ className, ...props }) => {
  const { isMatched: isMobile } = useMediaQuery({ maxWidth: 768 });

  return (
    <Section className={cn('bg-foreground', className)} {...props}>
      {USE_CASES.map((useCase, index) => (
        <Reveal rootMargin={isMobile ? '-200px' : '-300px'} key={index}>
          <UseCaseCard useCase={useCase} isOdd={index % 2 === 0} />
        </Reveal>
      ))}
      <TargetUsers />
    </Section>
  );
};

export default UseCases;
