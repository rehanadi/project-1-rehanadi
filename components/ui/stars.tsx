import { Icon } from '@iconify/react';

const Stars = ({ rating = 5 }: { rating?: number }) => {
  return (
    <div className='flex-start'>
      {Array.from({ length: rating }).map((_, index) => (
        <Icon
          key={index}
          icon='material-symbols:star-rounded'
          className='size-6 text-yellow-500'
        />
      ))}
    </div>
  );
};

export default Stars;
