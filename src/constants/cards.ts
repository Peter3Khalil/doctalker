import { Card } from '@/types';
import {
  BookOpenTextIcon,
  GraduationCapIcon,
  LibraryIcon,
} from '@/components/shared/Icons';

export const CARDS: Card[] = [
  {
    title: 'Students',
    description:
      'Study smarter, not harder. Use AI to summarize content, extract key points, and understand complex topics with ease.',
    icon: GraduationCapIcon,
  },
  {
    title: 'Educators',
    description:
      'Teach more effectively. Use AI to create engaging content, assess student understanding, and provide personalized feedback.',
    icon: BookOpenTextIcon,
  },
  {
    title: 'Researchers',
    description:
      'Work more efficiently. Use AI to extract key insights, summarize research papers, and generate high-quality content.',
    icon: LibraryIcon,
  },
];
