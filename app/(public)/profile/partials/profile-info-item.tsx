import type { Field } from '@/features/shared/types/field.types';

const ProfileInfoItem = ({ label, value }: Field) => {
  return (
    <div className='flex-between'>
      <span className='md:text-md text-sm font-medium'>{label}</span>
      <span className='md:text-md text-sm font-bold'>{value}</span>
    </div>
  );
};

export default ProfileInfoItem;
