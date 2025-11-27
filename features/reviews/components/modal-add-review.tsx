'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface ModalAddReviewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookId: number;
  onSubmit: (rating: number, comment: string) => void;
  isSubmitting?: boolean;
}

const ModalAddReview = ({
  open,
  onOpenChange,
  bookId,
  onSubmit,
  isSubmitting = false,
}: ModalAddReviewProps) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState<{ rating?: string; comment?: string }>(
    {}
  );

  const validateForm = () => {
    const newErrors: { rating?: string; comment?: string } = {};

    if (rating === 0) {
      newErrors.rating = 'Please select a rating';
    }

    if (!comment.trim()) {
      newErrors.comment = 'Comment is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    onSubmit(rating, comment);
  };

  const handleClose = () => {
    setRating(0);
    setComment('');
    setErrors({});
    onOpenChange(false);
  };

  // Reset form when modal opens
  useEffect(() => {
    if (open) {
      setRating(0);
      setComment('');
      setErrors({});
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className='max-w-[343px] md:max-w-[400px]'>
        <DialogHeader className='-mt-1'>
          <DialogTitle>Give Review</DialogTitle>
        </DialogHeader>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center'>
            <span className='md:text-md text-sm font-semibold'>
              Give Rating
            </span>
            <div className='flex gap-1'>
              {Array.from({ length: 5 }).map((_, index) => (
                <button
                  key={index}
                  type='button'
                  onClick={() => {
                    setRating(index + 1);
                    setErrors((prev) => ({ ...prev, rating: undefined }));
                  }}
                  className='transition-transform hover:scale-110'
                >
                  <Icon
                    icon='material-symbols:star-rounded'
                    className={cn(
                      'size-10 cursor-pointer md:size-12.25',
                      index < rating ? 'text-yellow-500' : 'text-neutral-300'
                    )}
                  />
                </button>
              ))}
            </div>
            {errors.rating && (
              <span className='text-danger-500 md:text-md text-sm font-medium'>
                {errors.rating}
              </span>
            )}
          </div>

          <div className='flex flex-col gap-1'>
            <Textarea
              placeholder='Please share your thoughts about this book'
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                setErrors((prev) => ({ ...prev, comment: undefined }));
              }}
              className='min-h-[235px] resize-none'
            />
            {errors.comment && (
              <span className='text-danger-500 text-sm font-medium'>
                {errors.comment}
              </span>
            )}
          </div>

          <Button
            className='h-10 w-full md:h-12'
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddReview;
