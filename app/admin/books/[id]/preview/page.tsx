'use client';

import BookInfo from '@/features/books/components/book-info';
import { useGetBook } from '@/features/books/hooks';
import { useParams } from 'next/navigation';
import PreviewBookTitle from './partials/preview-book-title';
import PreviewBookContainer from './partials/preview-book-container';

const PreviewBookPage = () => {
  const params = useParams();
  const bookId = Number(params.id);

  const { data, isLoading } = useGetBook(bookId);

  if (isLoading) {
    return (
      <PreviewBookContainer>
        <PreviewBookTitle />
        <div className='flex items-center justify-center py-20'>
          <p className='text-neutral-600'>Loading...</p>
        </div>
      </PreviewBookContainer>
    );
  }

  if (!data?.data) {
    return (
      <PreviewBookContainer>
        <PreviewBookTitle />
        <div className='flex items-center justify-center py-20'>
          <p className='text-neutral-600'>Book not found</p>
        </div>
      </PreviewBookContainer>
    );
  }

  return (
    <PreviewBookContainer>
      <PreviewBookTitle />
      <BookInfo book={data.data} />
    </PreviewBookContainer>
  );
};

export default PreviewBookPage;
