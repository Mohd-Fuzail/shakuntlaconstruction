import React from 'react'
import { quotes } from '../assets'

const Feedback1 = ({ title, img }) => {
  return (
  
    <div className='text-center shadow-xl rounded-lg px-4 py-4 bg-gray-100'>
     <div className='overflow-hidden'>
     <img
        src={img}
       
        className='h-[50vh]  hover:scale-125 duration-1000 rounded-lg'
      />
    <p className='font-poppins font-extrabold text-[20px] leading-[24px] mt-12 text-yellow-500'>{title}</p>
      
     </div>

    </div>
  )
}

export default Feedback1
