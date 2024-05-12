import {
  AnalysesIcon,
  ChatIcon,
  MailIcon,
  NotebookPenIcon,
  PasswordIcon,
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
    icon: MailIcon,
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    required: true,
    icon: PasswordIcon,
  },
];

export const REGISTER_FIELDS: InputFieldType[] = [
  {
    label: 'first name',
    name: 'first_name',
    type: 'text',
    placeholder: 'First Name',
    required: true,
    icon: NotebookPenIcon,
  },
  {
    label: 'last name',
    name: 'last_name',
    type: 'text',
    placeholder: 'Last Name',
    required: true,
    icon: NotebookPenIcon,
  },
  {
    label: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    required: true,
    icon: MailIcon,
  },
  {
    label: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    required: true,
    icon: PasswordIcon,
  },
  {
    label: 'confirm password',
    name: 'confirm_password',
    type: 'password',
    placeholder: 'Confirm Password',
    required: true,
    icon: PasswordIcon,
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
