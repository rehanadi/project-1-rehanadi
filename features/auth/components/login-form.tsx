'use client';

import AuthForm from './auth-form';
import { loginFields } from '../constants/login-fields';

const LoginForm = () => {
  const handleLogin = (formData: FormData) => {
    console.log('Login submitted', Object.fromEntries(formData));
  };

  return (
    <AuthForm
      title='Login'
      description='Sign in to manage your library account.'
      fields={loginFields}
      buttonText='Login'
      onSubmit={handleLogin}
      footerText="Don't have an account?"
      footerLinkText='Register'
      footerLinkHref='/register'
    />
  );
};

export default LoginForm;
