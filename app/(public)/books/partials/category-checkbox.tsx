'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { Field } from '@/features/shared/types/field.types';
import { useRouter, useSearchParams } from 'next/navigation';

interface CategoryCheckboxProps extends Field {
  checked?: boolean;
}

const CategoryCheckbox = ({ label, value, checked }: CategoryCheckboxProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (isChecked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());

    if (isChecked) {
      params.set('categoryId', value);
    } else {
      params.delete('categoryId');
    }

    router.push(`/books?${params.toString()}`);
  };

  return (
    <div className='flex-start gap-2'>
      <Checkbox id={value} checked={checked} onCheckedChange={handleChange} />
      <Label htmlFor={value} className='text-md cursor-pointer font-medium'>
        {label}
      </Label>
    </div>
  );
};

export default CategoryCheckbox;
