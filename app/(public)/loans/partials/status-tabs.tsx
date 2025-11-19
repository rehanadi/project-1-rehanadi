import { Badge } from '@/components/ui/badge';

const StatusTabs = () => {
  return (
    <div className='flex-start flex-wrap gap-2 md:gap-3'>
      <Badge variant='info-rounded' className='cursor-pointer'>
        All
      </Badge>
      <Badge variant='outline-rounded' className='cursor-pointer'>
        Active
      </Badge>
      <Badge variant='outline-rounded' className='cursor-pointer'>
        Returned
      </Badge>
      <Badge variant='outline-rounded' className='cursor-pointer'>
        Overdue
      </Badge>
    </div>
  );
};

export default StatusTabs;
