'use client';
import Features from '@/components/Features';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
export default function Home(): JSX.Element {
  return (
    <main className="pt-20 min-h-full w-full overflow-auto bg-foreground">
      <Header />
      <div className="h-[calc(100svh-5rem)]">
        <Hero />
        <Features />
      </div>
    </main>
  );
}
