import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'聯絡'} text2={'我們'} />
      </div>
      <div className="my10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="contact-image" className='w-full md:max-w-[480px]' />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our store</p>
          <p className='text-gray-500 '>民權東路3段2號13樓</p>
          <p className='text-gray-500'>02-2509-5900</p>
        </div>
      </div>
    </div>
  )
}

export default Contact