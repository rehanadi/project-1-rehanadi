import { Badge } from '@/components/ui/badge';

interface StatusTab {
  label: string;
  variant: 'info-rounded' | 'outline-rounded';
}

const StatusTabs = () => {
  const statusTabs: StatusTab[] = [
    { label: 'All', variant: 'info-rounded' },
    { label: 'Available', variant: 'outline-rounded' },
    { label: 'Borrowed', variant: 'outline-rounded' },
    { label: 'Returned', variant: 'outline-rounded' },
    { label: 'Damaged', variant: 'outline-rounded' },
  ];

  return (
    <div className='flex-start flex-wrap gap-2 md:gap-3'>
      {statusTabs.map((tab) => (
        <Badge key={tab.label} variant={tab.variant} className='cursor-pointer'>
          {tab.label}
        </Badge>
      ))}
    </div>
  );
};

export default StatusTabs;
