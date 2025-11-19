import { cn } from '@/lib/utils';

interface SeparatorProps {
  isVertical?: boolean;
  className?: string;
}

const Separator = ({ isVertical = false, className }: SeparatorProps) => {
  return (
    <div
      className={cn(isVertical ? 'w-px' : 'h-px', 'bg-neutral-300', className)}
    ></div>
  );
};

export default Separator;
