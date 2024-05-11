'use client';
import Capabilities from '@/app/_sections/Capabilities';
import Features from '@/app/_sections/Features';
import Hero from '@/app/_sections/Hero';
import Header from '@/components/Header';
export default function Home() {
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
