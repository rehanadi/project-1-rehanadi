import { Section } from '@/components/layouts/section';
import AuthorCard from '@/features/authors/components/author-card';
import BookCard from '@/features/books/components/book-card';
import { bookData } from '@/features/books/constants/book-data';

const AuthorPage = () => {
  return (
    <div className='custom-container flex w-full flex-col gap-4 pt-4 pb-10 md:gap-10 md:pt-12 md:pb-29.5'>
      <AuthorCard
        name='Author Name'
        booksCount={5}
        image='/images/avatar.png'
        link='/authors/author-id'
      />

      <Section title='Book List' className='gap-4 md:gap-8'>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5'>
          {bookData.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default AuthorPage;
