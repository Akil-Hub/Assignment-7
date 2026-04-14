import React from 'react'
import { FaPhoneSquare } from 'react-icons/fa'

const AudioCall = ({name}) => {
  return (
     <div className='flex justify-between px-5 border border-gray-200 items-center py-2 shadow-xl w-130 lg:w-300 '>
         <div className='flex items-center gap-2'>
             <FaPhoneSquare size={30}/>
          <div className="">
            <h3 className='text-lg font-semibold'>Meet Up</h3>
           <p className='text-secondary'>Asked for career Advice in Audio call with {name}</p>
          </div>
         </div>
         <p className='text-secondary'>Jan 28 , 2026</p>
       </div>
  )
}

export default AudioCall