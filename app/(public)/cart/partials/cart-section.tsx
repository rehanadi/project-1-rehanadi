import { Section } from '@/components/layouts/section';
import CartItems from './cart-items';
import LoanSummary from './loan-summary';

const CartSection = () => {
  return (
    <Section title='My Cart'>
      <div className='flex w-full flex-col gap-4 md:flex-row md:items-start md:gap-10'>
        <CartItems />
        <LoanSummary />
      </div>
    </Section>
  );
};

export default CartSection;
