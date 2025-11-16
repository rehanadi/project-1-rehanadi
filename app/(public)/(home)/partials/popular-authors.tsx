import { Section } from '@/components/layouts/section';
import AuthorCard from '@/features/authors/components/author-card';
import { authorData } from '@/features/authors/constants/author-data';

const PopularAuthors = () => {
  return (
    <Section title='Popular Authors'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4'>
        {authorData.map((author, index) => (
          <AuthorCard key={index} {...author} />
        ))}
      </div>
    </Section>
  );
};

export default PopularAuthors;
