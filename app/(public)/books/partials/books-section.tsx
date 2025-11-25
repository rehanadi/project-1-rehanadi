import { Section } from '@/components/layouts/section';
import CatalogWrapper from './catalog-wrapper';
import FilterWrapper from './filter-wrapper';

const BooksSection = () => {
  return (
    <Section title='Book List' className='gap-4 md:gap-8'>
      <div className='flex flex-col items-stretch gap-4 md:flex-row md:items-start md:gap-10'>
        <FilterWrapper />
        <CatalogWrapper />
      </div>
    </Section>
  );
};

export default BooksSection;
