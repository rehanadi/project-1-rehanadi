import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { Field } from '@/features/shared/types/field.types';

const AcceptmentCheckbox = ({ label, value }: Field) => {
  return (
    <div className='flex-start gap-2'>
      <Checkbox id={value} />
      <Label htmlFor={value} className='md:text-md text-sm font-semibold'>
        {label}
      </Label>
    </div>
  );
};

export default AcceptmentCheckbox;
