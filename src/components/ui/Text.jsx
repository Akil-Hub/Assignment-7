import React from 'react'
import { FaRegMessage } from 'react-icons/fa6'

const Text = ({name}) => {
  return (
    <div className='flex justify-between px-5 border border-gray-200 items-center py-2 shadow-xl w-full w-130 lg:w-300'>
      <div className='flex items-center gap-2'>
          <FaRegMessage size={30}/>
       <div className="">
         <h3 className='text-lg font-semibold'>Text</h3>
        <p className='text-secondary'>Asked for career advice from {name}</p>
       </div>
      </div>
      <p className='text-secondary'>Jan 28 , 2026</p>
    </div>
  )
}

export default Text