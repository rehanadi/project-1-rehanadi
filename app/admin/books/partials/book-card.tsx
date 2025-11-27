'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import BookRating from '@/features/books/components/book-rating';
import { Ellipsis } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import ModalDeleteBook from '@/features/books/components/modal-delete-book';
import { useDeleteBook } from '@/features/books/hooks';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  rating: number;
  image: string;
  category: string;
}

const BookCard = ({
  id,
  title,
  author,
  rating,
  image,
  category,
}: BookCardProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { mutate: deleteBook, isPending } = useDeleteBook();

  const handleDelete = () => {
    deleteBook(id, {
      onSuccess: () => {
        setShowDeleteModal(false);
      },
    });
  };

  return (
    <>
      <div className='shadow-light flex-between rounded-2xl bg-white p-4 md:p-5'>
        <div className='flex-start flex-1 gap-3 md:gap-4'>
          <Image
            src={image}
            alt={title}
            width={92}
            height={138}
            className='rounded object-cover'
          />

          <div className='flex flex-col gap-0.5'>
            <Badge variant='outline'>{category}</Badge>
            <h3 className='text-sm font-bold md:text-lg'>{title}</h3>
            <p className='md:text-md text-sm font-medium text-neutral-700'>
              {author}
            </p>
            <BookRating rating={rating} />
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='block md:hidden'>
              <Ellipsis className='size-6 cursor-pointer' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-[154px]'>
            <DropdownMenuItem asChild>
              <Link
                href={`/admin/books/${id}/preview`}
                className='cursor-pointer'
              >
                Preview
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={`/admin/books/${id}/edit`} className='cursor-pointer'>
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className='text-danger-500 focus:text-danger-500 cursor-pointer'
              onClick={() => setShowDeleteModal(true)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='hidden md:flex md:items-center md:gap-3.25'>
          <Button variant='outline' asChild className='h-12 w-[95px]'>
            <Link href={`/admin/books/${id}/preview`}>Preview</Link>
          </Button>
          <Button variant='outline' asChild className='h-12 w-[95px]'>
            <Link href={`/admin/books/${id}/edit`}>Edit</Link>
          </Button>
          <Button
            variant='danger'
            className='h-12 w-[95px]'
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </Button>
        </div>
      </div>

      <ModalDeleteBook
        open={showDeleteModal}
        onOpenChange={setShowDeleteModal}
        onConfirm={handleDelete}
        isDeleting={isPending}
      />
    </>
  );
};

export default BookCard;
