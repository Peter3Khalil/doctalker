'use client';
import Features from '@/components/Features';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
export default function Home(): JSX.Element {
  return (
    <main className="min-h-full w-full">
      <Header />
      <div className="h-[calc(100svh-5rem)] overflow-auto bg-foreground">
        <Hero />
        <Features />
      </div>
    </main>
  );
}
