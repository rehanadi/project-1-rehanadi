import { Section } from '@/components/layouts/section';
import BookCard from '@/features/books/components/book-card';
import { AuthorBook } from '@/features/authors/types/author.types';
import { useAppSelector } from '@/lib/hooks';

interface BookListProps {
  books: AuthorBook[];
}

const BookList = ({ books }: BookListProps) => {
  const { currentAuthor } = useAppSelector((state) => state.authors);

  if (books.length === 0) {
    return (
      <Section title='Book List' className='gap-4 md:gap-8'>
        <div className='text-center text-neutral-600'>No books found.</div>
      </Section>
    );
  }

  return (
    <Section title='Book List' className='gap-4 md:gap-8'>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5'>
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            authorName={currentAuthor?.name}
          />
        ))}
      </div>
    </Section>
  );
};

export default BookList;
