'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className={cn(
        'peer size-5 shrink-0 rounded-xs transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50',
        "bg-[url('/icons/checkbox-default.svg')] bg-contain bg-center bg-no-repeat",
        "data-[state=checked]:bg-[url('/icons/checkbox-checked.svg')]",
        'focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='hidden'
      >
        <CheckIcon className='size-3.5' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
