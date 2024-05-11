import {
  AnalysesIcon,
  ChatIcon,
  StarIcon,
  SummarizeIcon,
} from '@/components/shared/Icons';
import { InputFieldType, type AuthPageCardType } from '@/types';

export const LOGIN_FIELDS: InputFieldType[] = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    required: true,
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    required: true,
  },
];

export const REGISTER_FIELDS: InputFieldType[] = [
  {
    label: 'first name',
    name: 'first_name',
    type: 'text',
    placeholder: 'First Name',
    required: true,
  },
  {
    label: 'last name',
    name: 'last_name',
    type: 'text',
    placeholder: 'Last Name',
    required: true,
  },
  {
    label: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    required: true,
  },
  {
    label: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    required: true,
  },
  {
    label: 'confirm password',
    name: 'confirm_password',
    type: 'password',
    placeholder: 'Confirm Password',
    required: true,
  },
];

export const AUTH_PAGE_CARDS: AuthPageCardType[] = [
  {
    name: 'Summarize',
    description: 'Summarize your documents with ease.',
    icon: SummarizeIcon,
  },
  {
    name: 'Analyze',
    description: 'Read your documents in a better way',
    icon: AnalysesIcon,
  },
  {
    name: 'Chat',
    description: 'Ask questions about your documents',
    icon: ChatIcon,
  },
  {
    name: 'Star Message',
    description: 'Star important messages for later reference',
    icon: StarIcon,
  },
];
