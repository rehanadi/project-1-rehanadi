import { AuthField } from '../types/auth.types';

export const registerFields: AuthField[] = [
  {
    id: 'name',
    type: 'text',
    label: 'Name',
    value: '',
    isRequired: true,
    errorText: '',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    value: '',
    isRequired: true,
    errorText: '',
  },
  {
    id: 'phone',
    type: 'text',
    label: 'Nomor Handphone',
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
  {
    id: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    value: '',
    isRequired: true,
    errorText: '',
  },
];
