import { Button } from '@/components/ui/button';

const LoanSummary = () => {
  return (
    <div className='shadow-light fixed inset-x-0 bottom-0 z-50 flex w-full shrink-0 flex-row items-center justify-between border-t border-neutral-300 bg-white p-4 md:static md:w-[318px] md:flex-col md:items-stretch md:gap-6 md:rounded-2xl md:border-none md:p-5'>
      <h2 className='text-lg-bold hidden md:block'>Loan Summary</h2>

      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <span className='md:text-md text-sm font-medium'>Total Book</span>
        <span className='md:text-md text-sm font-bold'>2 Items</span>
      </div>

      <Button className='w-[150px] md:w-full'>Borrow Book</Button>
    </div>
  );
};

export default LoanSummary;
