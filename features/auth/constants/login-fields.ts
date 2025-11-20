import { AuthField } from '../types/auth.types';

export const loginFields: AuthField[] = [
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    value: '',
    isRequired: true,
    errorText: '',
  },
  {
    id: 'password',
    type: 'password',
    label: 'Password',
    value: '',
    isRequired: true,
    errorText: '',
  },
];
