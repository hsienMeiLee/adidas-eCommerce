import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'寄送'} text2={'方式'} />
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="text" placeholder='Email address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className="flex gap-3">
          <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder='Zip code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="number" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>

      {/* right side */}
      <div className="mt-8 ">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'付款'} text2={'方式'} />
          {/* payment method selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethod('linepay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-e-full ${method === 'linepay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.linePay_logo} alt="linepay-logo" className='h-5 mx-4' />
            </div>
            <div onClick={()=>setMethod('jkopay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-e-full ${method === 'jkopay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.jkoPay_logo} alt="jkopay-logo" className='h-5 mx-4' />
            </div>
            <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-e-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>貨到付款</p>
            </div>
          </div>

          <div className="w-full text-end mt-8 ">
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>去買單</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder