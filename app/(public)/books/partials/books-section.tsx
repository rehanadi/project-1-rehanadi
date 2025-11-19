import { Section } from '@/components/layouts/section';
import Catalog from './catalog';
import Filter from './filter';

const BooksSection = () => {
  return (
    <Section title='Book List' className='gap-4 md:gap-8'>
      <div className='flex flex-col items-stretch gap-4 md:flex-row md:items-start md:gap-10'>
        <Filter />
        <Catalog />
      </div>
    </Section>
  );
};

export default BooksSection;
