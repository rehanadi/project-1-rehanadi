import { User } from '@/features/users/types/user.types';
import UserField from './user-field';
import { Field } from '@/features/shared/types/field.types';

const UserCard = ({
  no,
  name,
  email,
  phone,
  createdAt,
}: User & { no: number }) => {
  const userFields: Field[] = [
    { label: 'No', value: no.toString() },
    { label: 'Name', value: name },
    { label: 'Email', value: email },
    { label: 'Nomor Handphone', value: phone },
    { label: 'Created at', value: createdAt },
  ];

  return (
    <div className='shadow-light flex flex-col gap-1 rounded-xl bg-white p-3'>
      {userFields.map((field, index) => (
        <UserField key={index} label={field.label} value={field.value} />
      ))}
    </div>
  );
};

export default UserCard;
