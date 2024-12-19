import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('登入'); //註冊

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>

      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      
      {currentState === '登入' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='姓名' required />}
      
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='電子郵件' required />

      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='密碼' required />

      <div className="w-full flex justify-between text-sm -mt-[8px]">
        <p className="cursor-pointer">忘記密碼</p>
        {
          currentState === '登入'
          ? <p onClick={()=>setCurrentState('註冊')} className='cursor-pointer'>建立帳戶</p>
          : <p onClick={()=>setCurrentState('登入')} className='cursor-pointer'>登入</p>
        }
      </div>

      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState}
      </button>
    </form>
  )
}

export default Login