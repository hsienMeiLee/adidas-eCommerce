import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 py-20 text-center text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="exchange-icon" />
            <p className="font-semibold">便捷的兌換政策</p>
            <p className="text-gray-400">
                我們提供無憂換貨政策
            </p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="exchange-icon" />
            <p className="font-semibold">7 天退貨政策</p>
            <p className="text-gray-400">
                我們提供 7 天退貨政策
            </p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="exchange-icon" />
            <p className="font-semibold">最好的客戶服務</p>
            <p className="text-gray-400">
                24/7 客戶服務
            </p>
        </div>
    </div>
  )
}

export default OurPolicy