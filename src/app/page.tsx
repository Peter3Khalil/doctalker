'use client';
import Capabilities from '@/app/_sections/Capabilities';
import Hero from '@/app/_sections/Hero';
import Header from '@/components/Header';
import Features from '@/app/_sections/Features';
export default function Home(): JSX.Element {
  return (
    <main className="min-h-full w-full overflow-auto bg-foreground">
      <Header />
      <div className="h-[100svh]">
        <Hero />
        <Capabilities />
        <Features />
      </div>
    </main>
  );
}
