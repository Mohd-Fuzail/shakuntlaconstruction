import React from 'react'
import { quotes } from '../assets'

const Feedback2 = ({ title, img }) => {
  return (
  
    <div className='  '>
     <div className=''>
     <img
        src={img}
       
        className='max-w-auto mx-1 rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800'
      />
    {/* <p className='font-poppins font-extrabold text-[20px] leading-[24px] mt-5 text-yellow-500'>{title}</p> */}
      
     </div>

    </div>
  )
}

export default Feedback2