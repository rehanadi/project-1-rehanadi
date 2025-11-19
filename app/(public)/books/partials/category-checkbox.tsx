import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface CategoryCheckboxProps {
  title: string;
  value: string;
}

const CategoryCheckbox = ({ title, value }: CategoryCheckboxProps) => {
  return (
    <div className='flex-start gap-2'>
      <Checkbox id={value} />
      <Label htmlFor={value} className='text-md font-medium'>
        {title}
      </Label>
    </div>
  );
};

export default CategoryCheckbox;
