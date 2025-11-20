import { Field } from '@/features/shared/types/field.types';

const UserField = ({ label, value }: Field) => {
  return (
    <div className='flex-between gap-1'>
      <span className='text-sm font-semibold'>{label}</span>
      <span className='text-sm font-bold'>{value}</span>
    </div>
  );
};

export default UserField;
