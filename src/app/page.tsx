'use client';
import TypingEffect from '@/components/ui/Animation/TypingEffect';
import { Button } from '@/components/ui/button';
export default function Home(): JSX.Element {
  return (
    <main className="min-h-full w-full">
      <header className="h-16 bg-foreground text-background shadow-md">
        <div className="flex h-full items-center justify-between px-4">
          <div className="text-xl font-bold text-primary">Home</div>
          <div className="flex items-center space-x-4">
            <button className="btn">Login</button>
            <button className="btn">Register</button>
          </div>
        </div>
      </header>
      <div className="h-[calc(100svh-4rem)] overflow-auto">
        <section
          className="hero relative flex h-full flex-col items-center"
        >
          <article className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center px-12 text-center">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-3xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-primary via-background to-primary bg-clip-text">
                Chat with Document
              </h1>
              <span className="shrink-0 rounded-full animate-gradient px-4 py-2 text-md font-bold text-background">
                Powered by AI
              </span>
            </div>
            <TypingEffect delay={30} className="mt-6 w-full min-h-[120px] md:min-h-[100px] overflow-auto break-words bg-gradient-to-r from-secondary to-muted-foreground bg-clip-text text-md font-semibold text-transparent md:w-[600px] md:text-lg">
              Leverage AI to analyze your PDFs. Experience the freedom to talk
              to your papers, reports, and textbooks at no cost. Revolutionize
              your PDF experience with ease.
            </TypingEffect>
            <Button className="mt-12 bg-gradient-to-l from-primary to-foreground px-8 py-6 text-lg transition-all duration-500 ease-in-out hover:scale-110">
              Start Chatting
            </Button>
          </article>
        </section>
      </div>
    </main>
  );
}
