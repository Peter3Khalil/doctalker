import Reveal from '@/components/animation/Reveal';
import { AUTH_PAGE_CARDS } from '@/constants/authPages';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { FC } from 'react';
interface AuthHeroProps extends React.HTMLProps<HTMLDivElement> {}
const AuthHero: FC<AuthHeroProps> = ({ className, ...props }) => {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <section
      className={cn(
        'absolute left-0 top-0 h-full w-full flex-1 lg:relative',
        className,
      )}
      {...props}
    >
      <Image
        src="/imgs/globe.webp"
        width={900}
        height={500}
        onLoad={() => {
          setLoaded(true);
        }}
        className="absolute left-0 top-0 z-[1] h-full w-full object-cover object-center"
        alt="Login"
      />
      {loaded && (
        <>
          {/* Content */}
          <div className="absolute left-0 top-0 z-20 hidden h-full w-full items-center justify-center px-6 text-accent lg:flex">
            <div className="flex flex-col items-center justify-center gap-6">
              <Reveal
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="h-fit w-fit"
              >
                <h1 className="text-4xl font-bold">Read Document,Better</h1>
              </Reveal>
              <ul className="grid grid-cols-2 gap-3">
                {AUTH_PAGE_CARDS.map((word, i) => (
                  <li key={i} className="">
                    <Reveal
                      className="flex flex-col items-start gap-2 rounded-lg border border-accent/20 bg-transparent px-5 py-3 backdrop-blur-lg"
                      delay={0.4 * i}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <word.icon size={14} className="shrink-0" />
                        <h4 className="text-lg font-bold">{word.name}</h4>
                      </div>
                      <p className="text-accent/70">{word.description}</p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Overlay */}
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-accent-foreground/60 lg:bg-accent-foreground/40"></div>
        </>
      )}
    </section>
  );
};

export default AuthHero;
