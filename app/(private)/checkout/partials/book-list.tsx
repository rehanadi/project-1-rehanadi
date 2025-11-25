'use client';

import CartItemCard from '@/features/cart/components/cart-item-card';
import { useAppSelector } from '@/lib/hooks';
import { Skeleton } from '@/components/ui/skeleton';

const BookList = () => {
  const { items, selectedItems } = useAppSelector((state) => state.cart);

  const selectedBooks = items.filter((item) => selectedItems.includes(item.id));

  if (selectedBooks.length === 0) {
    return (
      <div className='flex flex-col gap-4'>
        <h3 className='md:text-display-xs text-lg font-bold'>Book List</h3>
        <p className='text-neutral-600'>No books selected</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4'>
      <h3 className='md:text-display-xs text-lg font-bold'>Book List</h3>
      {selectedBooks.map((item) => {
        const isLoadingDetails = !item.authorName || !item.categoryName;

        if (isLoadingDetails) {
          return (
            <div key={item.id} className='flex items-center gap-3 md:gap-4'>
              <Skeleton className='h-24 w-16 shrink-0' />
              <div className='flex flex-1 flex-col gap-1'>
                <Skeleton className='h-5 w-20' />
                <Skeleton className='h-6 w-full' />
                <Skeleton className='h-4 w-32' />
              </div>
            </div>
          );
        }

        return (
          <CartItemCard
            key={item.id}
            title={item.book.title}
            author={item.authorName || ''}
            category={item.categoryName || ''}
            image={item.book.coverImage || '/images/book-placeholder.png'}
          />
        );
      })}
    </div>
  );
};

export default BookList;
