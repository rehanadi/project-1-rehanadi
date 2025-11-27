'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { editBookSchema, EditBookFormData } from '@/features/books/schemas';
import { useGetBook, useUpdateBook } from '@/features/books/hooks';
import { useGetCategories } from '@/features/categories/hooks';
import { useGetAuthors } from '@/features/authors/hooks';
import { useAppSelector } from '@/lib/hooks';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const EditBookPage = () => {
  const params = useParams();
  const router = useRouter();
  const bookId = parseInt(params.id as string);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<EditBookFormData>({
    resolver: zodResolver(editBookSchema),
  });

  const { data: bookData, isLoading, isError } = useGetBook(bookId);
  const { mutate: updateBook, isPending } = useUpdateBook(bookId);
  const { categories } = useAppSelector((state) => state.categories);
  const { authors } = useAppSelector((state) => state.authors);

  useGetCategories();
  useGetAuthors();

  useEffect(() => {
    if (isError) {
      router.push('/admin/books');
    }
  }, [isError, router]);

  useEffect(() => {
    if (bookData?.data && categories.length > 0 && authors.length > 0) {
      const book = bookData.data;
      reset({
        title: book.title,
        isbn: book.isbn,
        publishedYear: book.publishedYear,
        totalCopies: book.totalCopies,
        availableCopies: book.availableCopies,
        authorId: book.authorId,
        categoryId: book.categoryId,
        description: book.description,
        coverImage: book.coverImage || '',
      });
    }
  }, [bookData, categories, authors, reset]);

  const onSubmit = (data: EditBookFormData) => {
    updateBook({
      title: data.title,
      description: data.description,
      isbn: data.isbn,
      publishedYear: data.publishedYear,
      coverImage: data.coverImage || '',
      authorId: data.authorId,
      categoryId: data.categoryId,
      totalCopies: data.totalCopies,
      availableCopies: data.availableCopies,
    });
  };

  if (isLoading) {
    return (
      <div className='mx-auto flex w-[529px] max-w-full flex-col gap-4'>
        <div className='flex-start gap-1.5 md:gap-3'>
          <Link href='/admin/books'>
            <ArrowLeft className='size-6 md:size-8' />
          </Link>
          <h1 className='md:text-display-xs text-xl font-bold'>Edit Book</h1>
        </div>
        <div className='flex items-center justify-center py-12'>
          <p className='text-neutral-600'>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='mx-auto flex w-[529px] max-w-full flex-col gap-4'>
      <div className='flex-start gap-1.5 md:gap-3'>
        <Link href='/admin/books'>
          <ArrowLeft className='size-6 md:size-8' />
        </Link>

        <h1 className='md:text-display-xs text-xl font-bold'>Edit Book</h1>
      </div>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='title' className='text-sm font-bold'>
            Title
          </Label>

          <Input
            id='title'
            type='text'
            className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
            {...register('title')}
          />

          {errors.title && (
            <span className='text-danger-500 text-sm font-medium'>
              {errors.title.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='isbn' className='text-sm font-bold'>
            ISBN
          </Label>

          <Input
            id='isbn'
            type='text'
            className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
            {...register('isbn')}
          />

          {errors.isbn && (
            <span className='text-danger-500 text-sm font-medium'>
              {errors.isbn.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='publishedYear' className='text-sm font-bold'>
            Published Year
          </Label>

          <Input
            id='publishedYear'
            type='number'
            className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
            {...register('publishedYear', { valueAsNumber: true })}
          />

          {errors.publishedYear && (
            <span className='text-danger-500 text-sm font-medium'>
              {errors.publishedYear.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='totalCopies' className='text-sm font-bold'>
            Total Copies
          </Label>

          <Input
            id='totalCopies'
            type='number'
            className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
            {...register('totalCopies', { valueAsNumber: true })}
          />

          {errors.totalCopies && (
            <span className='text-danger-500 text-sm font-medium'>
              {errors.totalCopies.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='availableCopies' className='text-sm font-bold'>
            Available Copies
          </Label>

          <Input
            id='availableCopies'
            type='number'
            className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
            {...register('availableCopies', { valueAsNumber: true })}
          />

          {errors.availableCopies && (
            <span className='text-danger-500 text-sm font-medium'>
              {errors.availableCopies.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='authorId' className='text-sm font-bold'>
            Author
          </Label>

          <Controller
            name='authorId'
            control={control}
            render={({ field }) => (
              <Select
                key={`author-${field.value}`}
                value={field.value?.toString()}
                onValueChange={(value) => field.onChange(parseInt(value))}
              >
                <SelectTrigger className='h-12 w-full gap-2 rounded-xl border border-neutral-300'>
                  <SelectValue placeholder='Select Author' />
                </SelectTrigger>
                <SelectContent className='border-neutral-300'>
                  <SelectGroup>
                    {authors.map((author) => (
                      <SelectItem key={author.id} value={author.id.toString()}>
                        {author.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />

          {errors.authorId && (
            <span className='text-danger-500 text-sm font-medium'>
              {errors.authorId.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='categoryId' className='text-sm font-bold'>
            Category
          </Label>

          <Controller
            name='categoryId'
            control={control}
            render={({ field }) => (
              <Select
                key={`category-${field.value}`}
                value={field.value?.toString()}
                onValueChange={(value) => field.onChange(parseInt(value))}
              >
                <SelectTrigger className='h-12 w-full gap-2 rounded-xl border border-neutral-300'>
                  <SelectValue placeholder='Select Category' />
                </SelectTrigger>
                <SelectContent className='border-neutral-300'>
                  <SelectGroup>
                    {categories.map((category) => (
                      <SelectItem
                        key={category.id}
                        value={category.id.toString()}
                      >
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />

          {errors.categoryId && (
            <span className='text-danger-500 text-sm font-medium'>
              {errors.categoryId.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='description' className='text-sm font-bold'>
            Description
          </Label>

          <Textarea
            id='description'
            className='h-[101px] w-full resize-none rounded-xl border border-neutral-300 px-4 py-2'
            {...register('description')}
          />

          {errors.description && (
            <span className='text-danger-500 text-sm font-medium'>
              {errors.description.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='coverImage' className='text-sm font-bold'>
            Cover Image
          </Label>

          <Input
            id='coverImage'
            type='text'
            className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
            placeholder='Enter Image URL'
            {...register('coverImage')}
          />

          {errors.coverImage && (
            <span className='text-danger-500 text-sm font-medium'>
              {errors.coverImage.message}
            </span>
          )}
        </div>

        <Button className='h-12 w-full' type='submit' disabled={isPending}>
          {isPending ? 'Saving...' : 'Save'}
        </Button>
      </form>
    </div>
  );
};

export default EditBookPage;
