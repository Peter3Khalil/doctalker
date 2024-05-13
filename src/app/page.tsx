'use client';
import Capabilities from '@/app/_sections/Capabilities';
import Features from '@/app/_sections/Features';
import Hero from '@/app/_sections/Hero';
import Header from '@/components/Header';
import Team from './_sections/Team';
export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <div className="h-[100svh] divide-y-[1px] divide-background/20">
        <Hero />
        <Capabilities />
        <Features />
        <Team />
      </div>
    </main>
  );
}
