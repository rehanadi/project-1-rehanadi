import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icon } from '@iconify/react';
import { Author } from '../types/author.type';
import Link from 'next/link';

const AuthorCard = ({ name, booksCount, image, link }: Author) => {
  return (
    <div className='shadow-light flex-start flex gap-3 rounded-xl p-3 md:gap-4 md:p-4'>
      <Link href={link}>
        <Avatar className='size-15 md:size-[81px]'>
          <AvatarImage src={image} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </Link>

      <div className='flex flex-col gap-0.5'>
        <Link href={link}>
          <h3 className='text-sm-bold md:text-lg-bold hover:text-primary-300 text-neutral-900 transition-colors'>
            {name}
          </h3>
        </Link>
        <div className='flex-start gap-1.5'>
          <Icon
            icon='material-symbols:book'
            className='text-primary-300 size-6'
          />
          <span className='text-sm-medium md:text-md-medium'>
            {booksCount} books
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
