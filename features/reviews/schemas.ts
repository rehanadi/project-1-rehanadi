import { z } from 'zod';

export const addReviewSchema = z.object({
  bookId: z.number({
    message: 'Book ID is required',
  }),
  star: z
    .number({
      message: 'Rating is required',
    })
    .min(1, 'Please select a rating')
    .max(5, 'Rating must be between 1 and 5'),
  comment: z.string().min(1, 'Comment is required'),
});

export type AddReviewFormData = z.infer<typeof addReviewSchema>;
