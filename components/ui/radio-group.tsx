'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot='radio-group'
      className={cn('grid gap-3', className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot='radio-group-item'
      className={cn(
        'aspect-square size-6 shrink-0 rounded-full transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50',
        "bg-[url('/icons/radio-default.svg')] bg-contain bg-center bg-no-repeat",
        "data-[state=checked]:bg-[url('/icons/radio-checked.svg')]",
        'focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot='radio-group-indicator'
        className='hidden'
      >
        <CircleIcon className='fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2' />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
