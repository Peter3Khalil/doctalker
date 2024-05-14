import Features from '@/app/home/components/Features';
import Hero from '@/app/home/components/Hero';
import Team from '@/app/home/components/Team';
import UseCases from '@/app/home/components/UseCases';

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
