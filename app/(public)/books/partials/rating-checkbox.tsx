import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Icon } from '@iconify/react';
import type { Field } from '@/features/shared/types/field.types';

const RatingCheckbox = ({ label, value }: Field) => {
  return (
    <div className='flex-start gap-2 p-2'>
      <Checkbox id={value} />
      <Label htmlFor={value} className='text-md gap-0.5 font-medium'>
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
