import BookCard from './book-card';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/lib/hooks';
import { useMemo } from 'react';

interface BookListProps {
  searchQuery: string;
  isLoading: boolean;
  onLoadMore: () => void;
}

const BookList = ({ searchQuery, isLoading, onLoadMore }: BookListProps) => {
  const books = useAppSelector((state) => state.books.books);
  const pagination = useAppSelector((state) => state.books.pagination);

  const filteredBooks = useMemo(() => {
    if (!searchQuery) return books;

    return books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [books, searchQuery]);

  if (isLoading && books.length === 0) {
    return (
      <div className='flex flex-col gap-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className='shadow-light h-40 animate-pulse rounded-2xl bg-neutral-200'
          />
        ))}
      </div>
    );
  }

  if (filteredBooks.length === 0) {
    return (
      <div className='text-center text-neutral-600'>
        {searchQuery ? 'No books found.' : 'No books available.'}
      </div>
    );
  }

  const showLoadMore = pagination && books.length < pagination.total;

  return (
    <div className='flex flex-col gap-4'>
      {filteredBooks.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.Author.name}
          rating={book.rating}
          image={book.coverImage || '/images/book-placeholder.png'}
          category={book.Category.name}
        />
      ))}

      {isLoading && books.length > 0 && (
        <div className='text-center'>Loading...</div>
      )}

      {showLoadMore && !isLoading && (
        <Button
          className='w-37.5 self-center md:w-50'
          variant='outline'
          onClick={onLoadMore}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default BookList;
