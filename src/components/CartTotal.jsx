import React, { useContext } from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);
  return (
    <div className='w-full'>
        <div className="text-2xl">
            <Title text1={'購物車'} text2={'總計'} />
        </div>

        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p>產品總金額</p>
                <p>{currency}{getCartAmount()}</p>
            </div>
            <div className="flex justify-between">
                <p>運費總金額</p>
                <p>{currency}{delivery_fee}</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>總付款金額</p>
                <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal