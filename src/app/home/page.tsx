import Header from '@/components/Header';
import { SECTIONS } from '@/constants/sections';
export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <div className="h-[100svh] divide-y-[1px] divide-background/20">
        {SECTIONS.map((section, index) => {
          const SectionComponent = section.component as React.FC<
            React.HTMLProps<HTMLDivElement>
          >;
          return <SectionComponent key={index} id={section.id} />;
        })}
      </div>
    </main>
  );
}
