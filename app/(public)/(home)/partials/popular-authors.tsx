'use client';

import { Section } from '@/components/layouts/section';
import { Skeleton } from '@/components/ui/skeleton';
import AuthorCard from '@/features/authors/components/author-card';
import { useGetAuthors } from '@/features/authors/hooks';
import { useAppSelector } from '@/lib/hooks';

const PopularAuthors = () => {
  const { authors } = useAppSelector((state) => state.authors);
  const { isLoading, isError } = useGetAuthors();

  if (isError) {
    return (
      <Section title='Popular Authors'>
        <div className='text-danger-500 text-center'>
          Failed to load authors. Please try again.
        </div>
      </Section>
    );
  }

  if (isLoading) {
    return (
      <Section title='Popular Authors'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className='shadow-light flex-start flex gap-3 rounded-xl p-3 md:gap-4 md:p-4'
            >
              <Skeleton className='size-15 rounded-full md:size-[81px]' />
              <div className='flex flex-1 flex-col gap-0.5'>
                <Skeleton className='h-5 w-3/4 md:h-6' />
                <Skeleton className='h-4 w-1/2' />
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section title='Popular Authors'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4'>
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </Section>
  );
};

export default PopularAuthors;
