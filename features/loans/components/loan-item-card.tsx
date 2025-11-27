import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { MyLoan } from '../types/loan.types';
import dayjs from 'dayjs';
import { useGetBook } from '@/features/books/hooks';
import { useState } from 'react';
import ModalAddReview from '@/features/reviews/components/modal-add-review';
import { useAddReview } from '@/features/reviews/hooks';

interface LoanItemCardProps {
  loan: MyLoan;
}

const LoanItemCard = ({ loan }: LoanItemCardProps) => {
  const { data: bookData, isLoading: isLoadingBook } = useGetBook(loan.bookId);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const { mutate: addReview, isPending } = useAddReview();

  const getStatusVariant = (status: string) => {
    if (status === 'LATE') return 'danger';
    if (status === 'RETURNED') return 'outline';
    return 'success';
  };

  const getStatusLabel = (status: string) => {
    if (status === 'BORROWED') return 'Active';
    if (status === 'RETURNED') return 'Returned';
    return 'Overdue';
  };

  const handleSubmitReview = (rating: number, comment: string) => {
    addReview(
      {
        bookId: loan.bookId,
        star: rating,
        comment: comment,
      },
      {
        onSuccess: () => {
          setShowReviewModal(false);
        },
      }
    );
  };

  const defaultImage = '/images/book-placeholder.png';
  const borrowedDate = dayjs(loan.borrowedAt).format('DD MMM YYYY');
  const dueDate = dayjs(loan.dueAt).format('DD MMMM YYYY');
  const durationDays = dayjs(loan.dueAt).diff(dayjs(loan.borrowedAt), 'day');

  return (
    <>
      <div className='shadow-light flex flex-col gap-4 rounded-2xl bg-white p-4 md:gap-5 md:p-5'>
        <div className='flex-between gap-4'>
          <div className='flex-start gap-1 md:gap-3'>
            <span className='md:text-md text-sm font-bold'>Status</span>
            <Badge variant={getStatusVariant(loan.status)}>
              {getStatusLabel(loan.status)}
            </Badge>
          </div>

          <div className='flex-start gap-1 md:gap-3'>
            <span className='md:text-md text-sm font-bold'>Due Date</span>
            <Badge variant='danger'>{dueDate}</Badge>
          </div>
        </div>

        <Separator />

        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-4'>
          <div className='flex-center gap-4'>
            <Image
              src={loan.Book.coverImage || defaultImage}
              alt={loan.Book.title}
              width={92}
              height={138}
              className='shrink-0'
            />

            <div className='flex flex-1 flex-col gap-1'>
              {isLoadingBook ? (
                <Skeleton className='h-6 w-20' />
              ) : (
                <Badge variant='outline'>
                  {bookData?.data.Category.name || 'Category'}
                </Badge>
              )}

              <h3 className='text-md font-bold md:text-xl'>
                {loan.Book.title}
              </h3>

              {isLoadingBook ? (
                <Skeleton className='h-4 w-32' />
              ) : (
                <p className='md:text-md text-sm font-medium text-neutral-700'>
                  {bookData?.data.Author.name || 'Author'}
                </p>
              )}

              <div className='flex-start md:text-md gap-2 text-sm font-bold'>
                <span>{borrowedDate}</span>
                <div className='size-0.5 rounded-full bg-neutral-950'></div>
                <span>Duration {durationDays} Days</span>
              </div>
            </div>
          </div>

          <Button
            className='w-full md:h-10 md:w-[182px]'
            onClick={() => setShowReviewModal(true)}
          >
            Give Review
          </Button>
        </div>
      </div>

      <ModalAddReview
        open={showReviewModal}
        onOpenChange={setShowReviewModal}
        bookId={loan.bookId}
        onSubmit={handleSubmitReview}
        isSubmitting={isPending}
      />
    </>
  );
};

export default LoanItemCard;
