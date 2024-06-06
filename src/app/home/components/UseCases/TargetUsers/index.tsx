'use client';
import Reveal from '@/components/animation/Reveal';
import Section from '@/components/layouts/Section';
import GradientButton from '@/components/shared/GradientButton';
import SectionHeading from '@/components/shared/SectionHeading';
import { CARDS } from '@/constants/cards';
import { PAGES_ROUTES } from '@/constants/pagesRoutes';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';
import React, { FC } from 'react';
import Card from './Card';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const TargetUsers: FC<ComponentProps> = ({ className, ...props }) => {
  const { isMatched: isMobile } = useMediaQuery({ maxWidth: 768 });
  return (
    <Section className={className} {...props}>
      <SectionHeading>Accelerate your work.</SectionHeading>
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
      <Link href={PAGES_ROUTES.register}>
        <GradientButton>Get Started</GradientButton>
      </Link>
    </Section>
  );
};

export default TargetUsers;
