import { Section } from '@/components/layouts/section';
import { Separator } from '@/components/ui/separator';
import UserInfo from './user-info';
import BookList from './book-list';
import CheckoutForm from './checkout-form';

interface CheckoutSectionProps {
  onSuccess: (returnDate: string) => void;
}

const CheckoutSection = ({ onSuccess }: CheckoutSectionProps) => {
  return (
    <Section title='Checkout'>
      <div className='flex flex-col gap-6 md:flex-row md:gap-14.5'>
        <div className='flex flex-1 flex-col gap-4 md:gap-8'>
          <UserInfo />
          <Separator />
          <BookList />
        </div>

        <CheckoutForm onSuccess={onSuccess} />
      </div>
    </Section>
  );
};

export default CheckoutSection;
