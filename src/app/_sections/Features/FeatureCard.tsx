import { cn } from '@/lib/utils';
import { type Feature } from '@/types';
import React, { FC } from 'react';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {
  feature: Feature;
}
const FeatureCard: FC<ComponentProps> = ({ feature, className, ...props }) => {
  return (
    <article
      className={cn(
        'flex h-full w-full flex-col items-center gap-8 rounded-lg bg-accent-foreground px-6 py-10 text-center md:items-start md:text-left',
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 md:items-start">
        <feature.icon className="text-primary" size={32} />
        <h3 className="text-xl font-semibold capitalize">{feature.name}</h3>
      </div>
      <p className="md:text-md text-base text-accent/70">
        {feature.description}
      </p>
    </article>
  );
};

export default FeatureCard;
