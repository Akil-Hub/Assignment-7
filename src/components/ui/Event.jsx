import React from 'react'
import Image from 'next/image'
const Event = ({name,desc,src,alt,title,date}) => {
  return (
    <div className='flex flex-col gap-5 md:gap-0
    md:flex-row  justify-between px-5 border border-gray-200 items-center py-2 shadow-xl  lg:w-300 w-60 sm:w-80 md:w-140'>
      <div className='flex items-center gap-3'>
       
         <Image src={src || '/camera.png'} alt={alt} height={40} width={40}/>
       
       <div className="">
         <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-secondary text-xs sm:text-base'>{desc} {name}</p>
       </div>
      </div>
      <p className='text-secondary'>{date}</p>
    </div>
  )
}

export default Event