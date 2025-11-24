import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface AcceptmentCheckboxProps {
  label: string;
  value: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const AcceptmentCheckbox = ({
  label,
  value,
  checked,
  onCheckedChange,
}: AcceptmentCheckboxProps) => {
  return (
    <div className='flex-start gap-2'>
      <Checkbox
        id={value}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <Label htmlFor={value} className='md:text-md text-sm font-semibold'>
        {label}
      </Label>
    </div>
  );
};

export default AcceptmentCheckbox;
