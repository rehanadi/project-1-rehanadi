import { cn } from '@/lib/utils';

const HorizontalSeparator = ({ className }: { className?: string }) => {
  return <div className={cn('h-px bg-neutral-300', className)}></div>;
};

export default HorizontalSeparator;
