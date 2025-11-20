import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer outline-none',
  {
    variants: {
      variant: {
        default:
          'bg-primary-300 font-bold text-sm md:text-md text-neutral-25 rounded-full hover:opacity-90 transition-colors',
        outline:
          'bg-white font-bold text-sm md:text-md border border-neutral-300 text-neutral-950 rounded-full hover:bg-neutral-100 transition-colors',
        secondary:
          'bg-transparent hover:bg-neutral-100 border border-neutral-300 rounded-lg text-md font-medium',
        ghost:
          'bg-transparent border border-transparent hover:bg-neutral-100 hover:border hover:border-neutral-300 rounded-lg text-md font-medium',
      },
      size: {
        default: 'h-10 md:h-12 px-2',
        icon: 'size-10 md:size-12',
        pagination: 'h-10 px-2 min-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
