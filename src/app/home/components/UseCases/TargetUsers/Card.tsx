import { type Card } from '@/types';
import React, { FC } from 'react';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {
  card: Card;
}
const Card: FC<ComponentProps> = ({ card }) => {
  return (
    <article className="flex h-full w-full flex-col items-center gap-8 rounded-lg border border-primary bg-foreground px-6 py-10 text-center">
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-lg bg-primary p-2">
          <card.icon size={24} />
        </div>
        <h3 className="text-2xl font-semibold">{card.title}</h3>
      </div>
      <p className="text-base text-accent/70 md:text-lg">{card.description}</p>
    </article>
  );
};

export default Card;
