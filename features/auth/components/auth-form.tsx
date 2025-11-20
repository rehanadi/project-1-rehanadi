'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from '@/features/shared/components/logo';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { AuthFormType } from '../types/auth.types';

const AuthForm = ({
  title,
  description,
  fields = [],
  buttonText,
  onSubmit,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthFormType) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit?.(formData);
  };

  return (
    <div className='custom-container flex w-100 max-w-full flex-col gap-5'>
      <Link href='/'>
        <Logo width={121.79} height={33} />
      </Link>

      <div className='flex flex-col gap-0.5 md:gap-2'>
        <h1 className='text-display-xs md:text-display-sm font-bold'>
          {title}
        </h1>
        <p className='md:text-md text-sm font-semibold text-neutral-700'>
          {description}
        </p>
      </div>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div className='flex flex-col gap-0.5' key={field.id}>
            <Label htmlFor={field.id} className='text-sm font-bold'>
              {field.label}
            </Label>

            {field.type === 'password' ? (
              <div className='relative'>
                <Input
                  id={field.id}
                  type='password'
                  className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2 pr-11'
                />
                <Eye className='absolute top-1/2 right-4 size-5 -translate-y-1/2 transform' />
              </div>
            ) : (
              <Input
                id={field.id}
                type={field.type}
                className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
              />
            )}

            {field.errorText && (
              <span className='text-danger-500 text-sm font-medium'>
                {field.errorText}
              </span>
            )}
          </div>
        ))}

        <Button className='h-12 w-full' type='submit'>
          {buttonText}
        </Button>

        {footerText && (
          <p className='md:text-md text-center text-sm font-semibold'>
            {footerText}{' '}
            {footerLinkText && footerLinkHref && (
              <Link
                href={footerLinkHref}
                className='text-primary-300 font-bold'
              >
                {footerLinkText}
              </Link>
            )}
          </p>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
