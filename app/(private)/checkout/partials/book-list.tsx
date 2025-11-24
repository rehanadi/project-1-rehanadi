import CartItemCard from '@/features/cart/components/cart-item-card';
import { cartData } from '@/features/cart/constants/cart-data';

const BookList = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='md:text-display-xs text-lg font-bold'>Book List</h3>
      {cartData.slice(0, 2).map((item) => (
        <CartItemCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default BookList;
