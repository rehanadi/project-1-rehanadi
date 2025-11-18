import { Section } from '@/components/layouts/section';
import HorizontalSeparator from '@/components/separators/horizontal-separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { categoryData } from '@/constants/category-data';
import BookCard from '@/features/books/components/book-card';
import { bookData } from '@/features/books/constants/book-data';
import { Icon } from '@iconify/react';
import { ListFilter } from 'lucide-react';

interface FilterProps {
  title: string;
  value: string;
}

const BooksPage = () => {
  return (
    <div className='custom-container w-full py-4 md:pt-12 md:pb-[96.75px]'>
      <Section title='Book List' className='gap-4 md:gap-8'>
        <div className='flex flex-col items-stretch gap-4 md:flex-row md:items-start md:gap-10'>
          <div className='shadow-light flex items-center justify-between rounded-xl p-3 md:hidden'>
            <h3 className='text-sm-extrabold flex-1 uppercase'>Filter</h3>
            <ListFilter className='size-5' />
          </div>

          <div className='shadow-light hidden w-[266px] shrink-0 flex-col gap-6 rounded-xl bg-white py-4 md:flex'>
            <div className='flex flex-col gap-2.5 px-4'>
              <h3 className='text-md-bold uppercase'>Filter</h3>

              <h4 className='text-lg-bold'>Category</h4>

              {categoryData.map((category, index) => (
                <CategoryFilter
                  key={index}
                  title={category.title}
                  value={category.slug}
                />
              ))}
            </div>

            <HorizontalSeparator />

            <div className='flex flex-col gap-2.5 px-4'>
              <h4 className='text-lg-bold'>Rating</h4>

              <div>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <RatingFilter
                    key={rating}
                    title={rating.toString()}
                    value={rating.toString()}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className='grid flex-1 grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4'>
            {bookData.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BooksPage;

const CategoryFilter = ({ title, value }: FilterProps) => {
  return (
    <div className='flex-start gap-2'>
      <Checkbox id={value} />
      <Label htmlFor={value} className='text-md font-medium'>
        {title}
      </Label>
    </div>
  );
};

const RatingFilter = ({ title, value }: FilterProps) => {
  return (
    <div className='flex-start gap-2 p-2'>
      <Checkbox id={value} />
      <Label htmlFor={value} className='text-md gap-0.5 font-medium'>
        <Icon
          icon='material-symbols:star-rounded'
          className='size-6 text-yellow-500'
        />
        <span>{title}</span>
      </Label>
    </div>
  );
};
