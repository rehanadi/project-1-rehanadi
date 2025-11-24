import { Section } from '@/components/layouts/section';
import CartList from './cart-list';
import LoanSummary from './loan-summary';

const CartSection = () => {
  return (
    <Section title='My Cart'>
      <div className='flex w-full flex-col gap-4 md:flex-row md:items-start md:gap-10'>
        <CartList />
        <LoanSummary />
      </div>
    </Section>
  );
};

export default CartSection;
