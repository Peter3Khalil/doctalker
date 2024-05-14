import Features from '@/app/_sections/Features';
import Hero from '@/app/_sections/Hero';
import Team from '@/app/_sections/Team';
import UseCases from '@/app/_sections/UseCases';

type SectionType = {
  name: string;
  id: string;
  component: React.FC;
};
export const SECTIONS: SectionType[] = [
  {
    name: 'home',
    id: 'hero',
    component: Hero,
  },
  {
    name: 'use-cases',
    id: 'use-cases',
    component: UseCases,
  },
  {
    name: 'features',
    id: 'features',
    component: Features,
  },
  {
    name: 'team',
    id: 'team',
    component: Team,
  },
];
