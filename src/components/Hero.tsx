import React, { FC } from 'react';
import TypingEffect from '@/components/Animation/TypingEffect';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
interface ComponentProps extends React.HTMLProps<HTMLDivElement> {}
const Hero: FC<ComponentProps> = ({ className, ...props }) => {
  return (
    <section className="hero relative flex h-full flex-col items-center">
      <iframe
        src="https://giphy.com/embed/l5JbspfwZ0yjHjlJ0K"
        className="absolute left-0 top-0 h-full w-full object-cover object-center"
        allowFullScreen
      ></iframe>
      <article
        className={cn(
          'absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center',
          className,
        )}
        {...props}
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className="bg-gradient-to-r from-primary via-background to-primary bg-clip-text text-3xl font-bold text-transparent md:text-6xl">
            Chat with Document
          </h1>
          <span className="animate-gradient shrink-0 rounded-full px-4 py-2 text-md font-bold text-background">
            Powered by AI
          </span>
        </div>
        <TypingEffect
          delay={30}
          className="mt-6 min-h-[120px] w-full overflow-auto break-words bg-gradient-to-r from-secondary to-muted-foreground bg-clip-text text-md font-semibold text-transparent md:min-h-[100px] md:w-[600px] md:text-lg"
        >
          Leverage AI to analyze your PDFs. Experience the freedom to talk to
          your papers, reports, and textbooks at no cost. Revolutionize your PDF
          experience with ease.
        </TypingEffect>
        <Button className="mt-12 bg-gradient-to-l from-primary to-foreground px-8 py-6 text-lg transition-all duration-500 ease-in-out hover:scale-110">
          Start Chatting
        </Button>
      </article>
    </section>
  );
};

export default Hero;
