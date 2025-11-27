'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface ModalDeleteBookProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  isDeleting?: boolean;
}

const ModalDeleteBook = ({
  open,
  onOpenChange,
  onConfirm,
  isDeleting = false,
}: ModalDeleteBookProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className='md:max-w-[452px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Data</AlertDialogTitle>
          <AlertDialogDescription>
            Once deleted, you won't be able to recover this data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex-row gap-4'>
          <AlertDialogCancel
            className='md:text-md h-10 flex-1 rounded-full border-neutral-300 bg-white text-sm font-bold md:h-12'
            disabled={isDeleting}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className='bg-danger-500 md:text-md h-10 flex-1 rounded-full text-sm font-bold text-white hover:opacity-80 md:h-12'
            onClick={onConfirm}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Confirm'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalDeleteBook;
