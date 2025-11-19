import { Fragment } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cartData } from '@/features/cart/constants/cart-data';
import Separator from '@/features/shared/components/separator';
import CartItemCheckbox from './cart-item-checkbox';

const CartList = () => {
  return (
    <div className='flex flex-1 flex-col gap-4 md:gap-6'>
      <div className='flex-start gap-4'>
        <Checkbox id='all' />
        <Label htmlFor='all' className='text-md font-semibold'>
          Select All
        </Label>
      </div>

      {cartData.map((item, index) => (
        <Fragment key={item.id}>
          <CartItemCheckbox {...item} />
          {index !== cartData.length - 1 && <Separator />}
        </Fragment>
      ))}
    </div>
  );
};

export default CartList;
