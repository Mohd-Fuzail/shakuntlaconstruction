// import React from 'react'
// import { quotes } from '../assets'

// const Feedback = ({ content, name, title, img }) => {
//   return (
//     <div className='flex justify-between flex-col px-15 py-12 rounded-[10px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
//       <img
//         src={quotes}
//         alt='double-quotes'
//         className='w-[42px] h-[27px] object-contain'
//       />
//       <p className='font-poppins font-normal text-[15px] leading-[23px] text-gray-700 my-10'>
//         {content}
//       </p>
//       {/* <div className='flex flex-row'>
//         <img
//           src={img}
//           alt={name}
//           className='w-[48px] h-[48px] rounded-full'
//         />
//         <div className='flex flex-col ml-4'>
//           <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
//           <p className='font-poppins font-normal text-[16px] leading-[24px] text-white'>{title}</p>
//         </div>
//       </div> */}
//     </div>
//   )
// }

// export default Feedback
import React from 'react'
import { quotes } from '../assets'

const Feedback = ({ content, name, title, img }) => {
  return (
  
    <div className='text-center shadow-xl rounded-lg px-4 py-4 bg-gray-100'>
     <div className='overflow-hidden'>
     <img
        src={img}
       
        className='h-[50vh] w-[100%]  hover:scale-125 duration-1000 rounded-lg'
      />
    <p className='font-poppins font-extrabold text-[20px] leading-[24px] mt-12 text-yellow-500'>{title}</p>
      <p className='font-poppins font-normal text-[15px] leading-[23px] text-gray-700  mt-4  my-5'>
        {content}
      </p>

     </div>

    </div>
  )
}

export default Feedback

