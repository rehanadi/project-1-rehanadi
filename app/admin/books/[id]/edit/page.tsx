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

const EditBookPage = () => {
  return (
    <div className='mx-auto flex w-[529px] max-w-full flex-col gap-4'>
      <div className='flex-start gap-1.5 md:gap-3'>
        <Link href='/admin/books'>
          <ArrowLeft className='size-6 md:size-8' />
        </Link>

        <h1 className='md:text-display-xs text-xl font-bold'>Edit Book</h1>
      </div>

      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='title' className='text-sm font-bold'>
            Title
          </Label>

          <Input
            id='title'
            type='text'
            className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
          />

          <span className='text-danger-500 text-sm font-medium'>
            Text Helper
          </span>
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='isbn' className='text-sm font-bold'>
            ISBN
          </Label>

          <Input
            id='isbn'
            type='text'
            className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
          />

          <span className='text-danger-500 text-sm font-medium'>
            Text Helper
          </span>
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='publishedYear' className='text-sm font-bold'>
            Published Year
          </Label>

          <Input
            id='publishedYear'
            type='number'
            className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
          />

          <span className='text-danger-500 text-sm font-medium'>
            Text Helper
          </span>
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='totalCopies' className='text-sm font-bold'>
            Total Copies
          </Label>

          <Input
            id='totalCopies'
            type='number'
            className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
          />

          <span className='text-danger-500 text-sm font-medium'>
            Text Helper
          </span>
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='availableCopies' className='text-sm font-bold'>
            Available Copies
          </Label>

          <Input
            id='availableCopies'
            type='number'
            className='h-12 w-full rounded-xl border border-neutral-300 px-4 py-2'
          />

          <span className='text-danger-500 text-sm font-medium'>
            Text Helper
          </span>
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='authorId' className='text-sm font-bold'>
            Author
          </Label>

          <Select>
            <SelectTrigger className='h-12! w-full gap-2 rounded-xl border border-neutral-300'>
              <SelectValue placeholder='Select Author' className='px-2' />
            </SelectTrigger>
            <SelectContent id='authorId' className='border-neutral-300'>
              <SelectGroup>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <span className='text-danger-500 text-sm font-medium'>
            Text Helper
          </span>
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='categoryId' className='text-sm font-bold'>
            Category
          </Label>

          <Select>
            <SelectTrigger className='h-12! w-full gap-2 rounded-xl border border-neutral-300'>
              <SelectValue placeholder='Select Category' className='px-2' />
            </SelectTrigger>
            <SelectContent id='categoryId' className='border-neutral-300'>
              <SelectGroup>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <span className='text-danger-500 text-sm font-medium'>
            Text Helper
          </span>
        </div>

        <div className='flex flex-col gap-0.5'>
          <Label htmlFor='description' className='text-sm font-bold'>
            Description
          </Label>

          <Textarea
            id='description'
            className='h-[101px] w-full resize-none rounded-xl border border-neutral-300 px-4 py-2'
          />

          <span className='text-danger-500 text-sm font-medium'>
            Text Helper
          </span>
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
          />

          <span className='text-danger-500 text-sm font-medium'>
            Text Helper
          </span>
        </div>

        <Button className='h-12 w-full' type='submit'>
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditBookPage;
