'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from '@/features/shared/components/logo';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLogin } from '../hooks';
import { loginSchema, LoginFormData } from '../schemas';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: loginUser, isPending } = useLogin();

  const onSubmit = (data: LoginFormData) => {
    loginUser(data);
  };

  return (
    <div className='custom-container flex w-100 max-w-full flex-col gap-5'>
      <Link href='/'>
        <Logo width={121.79} height={33} />
      </Link>

      <div className='flex flex-col gap-0.5 md:gap-2'>
        <h1 className='text-display-xs md:text-display-sm font-bold'>Login</h1>
        <p className='md:text-md text-sm font-semibold text-neutral-700'>
          Sign in to manage your library account.
        </p>
      </div>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='email' className='text-sm font-bold'>
            Email
          </Label>
          <Input
            id='email'
            type='email'
            className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
            {...register('email')}
          />
          {errors.email && (
            <span className='text-danger-500 text-sm font-medium'>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='password' className='text-sm font-bold'>
            Password
          </Label>
          <div className='relative'>
            <Input
              id='password'
              type={showPassword ? 'text' : 'password'}
              className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2 pr-11'
              {...register('password')}
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-1/2 right-4 -translate-y-1/2 transform'
            >
              {showPassword ? (
                <EyeOff className='size-5' />
              ) : (
                <Eye className='size-5' />
              )}
            </button>
          </div>
          {errors.password && (
            <span className='text-danger-500 text-sm font-medium'>
              {errors.password.message}
            </span>
          )}
        </div>

        <Button className='h-12 w-full' type='submit' disabled={isPending}>
          {isPending ? 'Loading...' : 'Login'}
        </Button>

        <p className='md:text-md text-center text-sm font-semibold'>
          Don't have an account?{' '}
          <Link href='/register' className='text-primary-300 font-bold'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
