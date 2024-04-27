import React, { FC } from 'react';
import Reveal from '../Animation/Reveal';
import FeatureCard from './FeatureCard';
import { FEATURES } from '@/constants/features';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Features: FC<ComponentProps> = ({ className, ...props }) => {
  return (
    <section className="flex min-h-full flex-col gap-6 px-6 py-12 lg:px-20">
      {FEATURES.map((feature, index) => (
        <Reveal key={index}>
          <FeatureCard feature={feature} isOdd={index%2===0}/>
        </Reveal>
      ))}
    </section>
  );
};

export default Features;
