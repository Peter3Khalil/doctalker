'use client';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Features from '@/components/Features';
export default function Home(): JSX.Element {
  return (
    <main className="min-h-full w-full">
      <Header />
      <div className="h-[calc(100svh-5rem)] overflow-auto bg-foreground">
        <Hero />
        <Features />
        <Features />
        <Features />
      </div>
    </main>
  );
}
