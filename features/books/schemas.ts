import { z } from 'zod';

export const addBookSchema = z
  .object({
    title: z.string().min(1, 'Title is required'),
    isbn: z.string().min(1, 'ISBN is required'),
    publishedYear: z
      .number({
        message: 'Published year must be a number',
      })
      .int('Published year must be an integer')
      .min(1000, 'Published year must be at least 1000')
      .max(new Date().getFullYear(), 'Published year cannot be in the future'),
    totalCopies: z
      .number({
        message: 'Total copies must be a number',
      })
      .int('Total copies must be an integer')
      .min(1, 'Total copies must be at least 1'),
    availableCopies: z
      .number({
        message: 'Available copies must be a number',
      })
      .int('Available copies must be an integer')
      .min(0, 'Available copies cannot be negative'),
    authorId: z.number({
      message: 'Please select an author',
    }),
    categoryId: z.number({
      message: 'Please select a category',
    }),
    description: z.string().min(1, 'Description is required'),
    coverImage: z
      .string()
      .url('Cover image must be a valid URL')
      .optional()
      .or(z.literal('')),
  })
  .refine((data) => data.availableCopies <= data.totalCopies, {
    message: 'Available copies cannot exceed total copies',
    path: ['availableCopies'],
  });

export const editBookSchema = addBookSchema;

export type AddBookFormData = z.infer<typeof addBookSchema>;
export type EditBookFormData = z.infer<typeof editBookSchema>;
