import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import type { Field } from '@/features/shared/types/field.types';

const DurationRadio = ({ label, value }: Field) => {
  return (
    <div className='flex items-center gap-2 md:gap-3.75'>
      <RadioGroupItem value={value} id={value} />
      <Label htmlFor={value} className='text-sm-semibold'>
        {label}
      </Label>
    </div>
  );
};

export default DurationRadio;
