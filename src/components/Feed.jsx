import React from 'react'
import { quotes } from '../assets'

const Feed = ({ content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-5 py-5 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 hover:scale-110 duration-500 bg-[rgba(243,246,247,0.51)] '>
      <img
        src={quotes}
        alt='double-quotes'
        className='w-[30px] h-[27px] object-contain'
      />
      <p className='font-poppins font-normal text-[15px] leading-[17px] text-black my-10'>
        {content}
      </p>
      <div className='flex flex-row'>
        <img
          src={img}
          alt={name}
          className='w-[48px] h-[48px] rounded-full'
        />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-white'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Feed