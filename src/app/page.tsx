'use client';
import Capabilities from '@/app/_sections/Capabilities';
import Hero from '@/app/_sections/Hero';
import Header from '@/components/Header';
import Features from '@/app/_sections/Features';
export default function Home(): JSX.Element {
  return (
    <main className="min-h-full w-full overflow-auto bg-foreground pt-16 md:pt-20">
      <Header />
      <div className="h-[calc(100svh-4rem)] md:h-[calc(100svh-5rem)]">
        <Hero />
        <Capabilities />
        <Features />
      </div>
    </main>
  );
}
