import CartItemCard from '@/features/cart/components/cart-item-card';
import type { CartItem } from '@/features/cart/types/cart.types';
import { Checkbox } from '@/components/ui/checkbox';

const CartItemCheckbox = ({ title, author, category, id, image }: CartItem) => {
  return (
    <div className='flex items-start justify-start gap-4'>
      <Checkbox id={id} />
      <CartItemCard
        title={title}
        author={author}
        category={category}
        image={image}
      />
    </div>
  );
};

export default CartItemCheckbox;
