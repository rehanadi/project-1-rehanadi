import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import type { CartItem } from '../types/cart.types';

const CartItemCard = ({
  title,
  author,
  category,
  image,
}: Omit<CartItem, 'id'>) => {
  return (
    <div className='flex items-center justify-start gap-3 md:gap-4'>
      <div className='relative h-[106px] w-[70px] md:h-[138px] md:w-[92px]'>
        <Image src={image} alt={title} fill />
      </div>

      <div className='flex flex-col gap-1'>
        <Badge variant='outline'>{category}</Badge>
        <h3 className='text-md-bold md:text-lg-bold'>{title}</h3>
        <p className='text-sm-medium md:text-md-medium text-neutral-700'>
          {author}
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
