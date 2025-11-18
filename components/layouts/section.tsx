import { cn } from '@/lib/utils';
import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title?: string;
  id?: string;
  className?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  id,
  className,
}) => {
  return (
    <div
      className={cn('flex w-full flex-col gap-5 md:gap-10', className)}
      id={id}
    >
      {/* heading */}
      {title && (
        <h2 className='text-display-xs md:text-display-lg font-bold'>
          {title}
        </h2>
      )}

      {/* content */}
      <div>{children}</div>
    </div>
  );
};
