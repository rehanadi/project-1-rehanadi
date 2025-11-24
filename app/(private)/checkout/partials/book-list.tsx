'use client';

import CartItemCard from '@/features/cart/components/cart-item-card';
import { useAppSelector } from '@/lib/hooks';

const BookList = () => {
  const { items, selectedItems } = useAppSelector((state) => state.cart);

  const selectedBooks = items.filter((item) => selectedItems.includes(item.id));

  return (
    <div className='flex flex-col gap-4'>
      <h3 className='md:text-display-xs text-lg font-bold'>Book List</h3>
      {selectedBooks.map((item) => (
        <CartItemCard
          key={item.id}
          title={item.book.title}
          author={item.authorName || ''}
          category={item.categoryName || ''}
          image={item.book.coverImage || '/images/book-placeholder.png'}
        />
      ))}
    </div>
  );
};

export default BookList;
