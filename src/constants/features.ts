import {
  BrainIcon,
  ChatWithFolderIcon,
  EaseToUseIcon,
  PerformanceIcon,
  SecurityIcon,
} from '@/components/shared/Icons';
import { type Feature } from '@/types';

export const FEATURES: Feature[] = [
  {
    name: 'Different AI Models',
    icon: BrainIcon,
    description:
      'DocTalker supports the latest GPT4 and Gemini ai models to provide the best results for your needs.',
  },
  {
    name: 'Chat with Folder',
    icon: ChatWithFolderIcon,
    description:
      'Chat with multiple documents to get the information you need.',
  },
  {
    name: 'Easy to Use',
    icon: EaseToUseIcon,
    description:
      'DocTalker is an easy-to-use platform that makes it simple to get started on any device.',
  },
  {
    name: 'Secure',
    icon: SecurityIcon,
    description:
      'DocTalker is a secure platform that ensures your data is safe and protected.',
  },
  {
    name: 'High Performance',
    icon: PerformanceIcon,
    description:
      'DocTalker is a high-performance platform that delivers fast and reliable results.',
  },
];
