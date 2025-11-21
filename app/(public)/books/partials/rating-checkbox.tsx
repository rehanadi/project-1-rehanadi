'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Icon } from '@iconify/react';
import type { Field } from '@/features/shared/types/field.types';
import { useRouter, useSearchParams } from 'next/navigation';

interface RatingCheckboxProps extends Field {
  checked?: boolean;
}

const RatingCheckbox = ({ label, value, checked }: RatingCheckboxProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (isChecked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());

    if (isChecked) {
      params.set('rating', value);
    } else {
      params.delete('rating');
    }

    router.push(`/books?${params.toString()}`);
  };

  return (
    <div className='flex-start gap-2 p-2'>
      <Checkbox
        id={`rating-${value}`}
        checked={checked}
        onCheckedChange={handleChange}
      />
      <Label
        htmlFor={`rating-${value}`}
        className='text-md cursor-pointer gap-0.5 font-medium'
      >
        <Icon
          icon='material-symbols:star-rounded'
          className='size-6 text-yellow-500'
        />
        <span>{label}</span>
      </Label>
    </div>
  );
};

export default RatingCheckbox;
