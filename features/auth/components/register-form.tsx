'use client';

import { registerFields } from '../constants/register-fields';
import AuthForm from './auth-form';

const RegisterForm = () => {
  const handleRegister = (formData: FormData) => {
    console.log('Register submitted', Object.fromEntries(formData));
  };

  return (
    <AuthForm
      title='Register'
      description='Create your account to start borrowing books.'
      fields={registerFields}
      buttonText='Submit'
      onSubmit={handleRegister}
      footerText='Already have an account?'
      footerLinkText='Log In'
      footerLinkHref='/login'
    />
  );
};

export default RegisterForm;
