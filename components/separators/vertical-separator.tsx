import { cn } from '@/lib/utils';

const VerticalSeparator = ({ className }: { className?: string }) => {
  return <div className={cn('w-px bg-neutral-300', className)}></div>;
};

export default VerticalSeparator;
