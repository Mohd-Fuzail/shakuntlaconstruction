import React from 'react'
import { clients } from '../constants'
import styles from '../style'
import { aa1, aa2, aa3, aa4, aa5, aa6 } from '../assets'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500`}>
       
       {/* <div>
            <h1 className='text-[35px] font-semibold py-10 text-center'>Clients</h1>
        </div> */}
  <div className="w-full inline-flex flex-nowrap overflow-hidden">
  <div className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
    
      <img src={aa1} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa2} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa3} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa4} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa5} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa6} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
    </div>
    <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
      {/* Content to be horizontally scrolled */}
      <img src={aa1} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa2} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa3} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa4} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa5} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa6} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      {/* Repeat your content as needed */}
    </div>
  </div>
    </section>
  )
}

export default Clients
