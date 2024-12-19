import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {
  const {products, currency, cartItems} = useContext(ShopContext);

  const orders = Object.entries(cartItems).flatMap(([productId, sizes]) =>
    Object.entries(sizes).map(([size, quantity]) => {
      const product = products.find((product) => product._id === productId);
      return {
        ...product,
        size,
        quantity,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      };
    })
  );
  return (
    <div className='border-t pt-16'>
      <div className="text-2xl">
        <Title text1={'我的'} text2={'訂單'} />
      </div>
      <div>
        {
          orders.map((order, index) => (
            <div
              key={index}
              className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
            >
              <div className='flex items-start gap-6 text-sm'>
                <img src={order.image[0]} alt="image" className='w-1/6 sm:w-20' />
                <div>
                  <p className='sm:text-base font-medium'>{order.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p className='text-lg'>{currency}{order.price}</p>
                    <p>Quantity: {order.quantity}</p>
                    <p>Size: {order.size}</p>
                  </div>
                  <p className='mt-2'>
                    Date: <span className='text-gray-400'>{order.datenpm}</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className="text-sm md:text-base">待出貨</p>
                </div>
                <button className="border px-4 py-2 text-sm font-medium rounded-sm">追蹤訂單</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders