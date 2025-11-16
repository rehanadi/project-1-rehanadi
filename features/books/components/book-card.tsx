import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import type { Book } from '../types/book.type';

const BookCard = ({ title, author, rating, image, link }: Book) => {
  return (
    <div className='shadow-light overflow-hidden rounded-xl'>
      <Link href={link}>
        <div className='group relative aspect-224/336 w-full overflow-hidden'>
          <Image
            src={image}
            alt={title}
            fill
            className='transition group-hover:scale-110'
          />
        </div>
      </Link>

      <div className='flex flex-col gap-0.5 p-3'>
        <Link href={link}>
          <h3 className='text-sm-bold hover:text-primary-300 text-neutral-900 transition-colors'>
            {title}
          </h3>
        </Link>
        <p className='text-sm-medium text-neutral-700'>{author}</p>
        <div className='flex-start gap-0.5'>
          <Icon
            icon='material-symbols:star-rounded'
            className='size-6 text-yellow-500'
          />
          <span className='text-sm-semibold text-neutral-900'>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
