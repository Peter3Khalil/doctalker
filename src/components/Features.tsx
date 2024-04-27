import Image from 'next/image';
import React, { FC } from 'react';
import { Button } from './ui/button';
import Reveal from './Animation/Reveal';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Features: FC<ComponentProps> = ({ className, ...props }) => {
  return (
    <Reveal>
      <section className="min-h-full px-6 py-12 lg:px-20">
        <article className="flex min-h-full flex-col items-center gap-10 rounded-lg bg-accent-foreground px-6 py-12 text-accent lg:px-16">
          <h2 className="text-center text-xl font-bold lg:text-3xl">
            Understand PDF documents effortlessly with AI.
          </h2>
          <div className="flex h-auto w-full flex-col gap-6 lg:h-[400px] lg:flex-row">
            <div className="h-[300px] w-full rounded-2xl bg-foreground/20 p-6 backdrop-blur-3xl lg:h-full lg:flex-1">
              <div className="relative h-full w-full rounded-[inherit]">
                <Image
                  src="/hero.webp"
                  alt="Feature"
                  layout="fill"
                  className="absolute left-0 top-0 h-full w-full rounded-[inherit] object-cover object-center"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-3">
              <h3 className="text-2xl font-bold">Extract Key Points</h3>
              <p className="text-sm text-muted/70">
                Transform the way you read and comprehend PDF content. Summarize
                lengthy passages, extract key information, and quickly locate
                what you need. Say hello to an efficient and hassle-free
                document comprehension journey.
              </p>
              <Button className="mt-12 w-fit bg-gradient-to-l from-primary to-foreground px-8 py-6 text-lg transition-all duration-500 ease-in-out hover:scale-110">
                Start Chatting
              </Button>
            </div>
          </div>
        </article>
      </section>
    </Reveal>
  );
};

export default Features;
