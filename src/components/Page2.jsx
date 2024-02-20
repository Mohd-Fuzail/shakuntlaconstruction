
import React from 'react';
import { Link } from 'react-router-dom';

import { discount, mf1, robot, check } from '../assets';

import Footer from './Footer';
import { motion as m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles, { layout } from '../style';
import { f1,f2,f3,f4,f5,f6 } from '../assets';
import Feedback from './Feedback';
import { feedback } from '../constants';



function Page2() {
    const [ref, inView] = useInView({
        triggerOnce: false,
      });
    
      const animationVariants = {
        visible: { x: 0, opacity: 1 },
        hidden: { x: '50%', opacity: 0 },
      };
  return (
    <div>
      <div className={`w-full h-[40vh] bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixed ${styles.flexStart}`}>
        <div className='w-full h-[40vh] bg-[rgba(117,196,228,0.76)] '>
          <div className={`${styles.boxWidth}`}>
            <h1 className={`text-center ${styles.flexCenter} ${styles.paddingY} text-white font-extrabold my-5 text-[60px]`}>Services</h1>
          </div>
        </div>
      </div>
      <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full  bottom-40'/>
      <hr className='w-90 h-1 xs:mb-5 mb-10 bg-black border-0 rounded'/>
      <div className='w-full bg-red-400  items-center xs:mb-15   mb-6 relative z-[1]'>
        <h2 className={`text-center font-poppins text-transparent  bg-clip-text bg-gradient-to-r from-white to-white ${styles.heading2}`}>Area of Operation</h2>
    
      </div>
      <hr className='w-90 h-1 mx-auto mb-10  bg-black border-0 rounded'/>
      
      <div className='max-w-[1320] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-[20px]'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card}/>        
        ))}
      </div> 
    </section>
    <hr className='w-90 h-1 xs:mb-5 mb-10 bg-black border-0 rounded'/>
      <div className='w-full bg-red-400  items-center xs:mb-15   mb-6 relative z-[1]'>
        <h2 className={`text-center font-poppins text-transparent  bg-clip-text bg-gradient-to-r from-white to-white ${styles.heading2}`}>Operational Domain</h2>
    
      </div>
      <hr className='w-90 h-1 mx-auto mb-10  bg-black border-0 rounded'/>




<div className={` ${styles.flexce} py-5 flex-col relative bg-gray-100`} ref={ref}>
     
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full  bottom-40' />
      
      <div className='overflow-hidden'>
        <m.div
          variants={animationVariants}
          animate={inView ? 'visible' : 'hidden'}
          initial='hidden'
          transition={{ delay: .25, duration: .5 }}
          className='max-w-[1320] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-[20px]'>
             <div className='text-center shadow-xl rounded-lg px-4 py-4 bg-gray-100'>
     <div className='overflow-hidden'>
     <img
        src={f1}
       
        className='h-[10vh] mx-auto   animate-bounce rounded-lg'
      />
    <p className='font-poppins font-extrabold text-[20px] leading-[24px] mt-12 text-yellow-500'>Transformer Services</p>
    <p className='my-3'> Our offerings cover a spectrum of transformer testing services, including SFRA, Tan Delta Measurement, Insulation Resistance Testing, Winding Resistance Testing, Magnetic Balance & Magnetizing Current Analysis, Short Circuit Testing, Ratio Testing, and Vector Group Analysis.</p>
      
     </div>

             </div>
             <div className='text-center shadow-xl rounded-lg px-4 py-4 bg-gray-100'>
     <div className='overflow-hidden'>
     <img
        src={f2}
       
        className='h-[10vh]  animate-bounce rounded-lg mx-auto'
      />
    <p className='font-poppins font-extrabold text-[20px] leading-[24px] mt-12 text-yellow-500'>Circuit Breaker Services</p>
      <p className='my-3'>From Contact Resistance Measurement to Timing Analysis, Insulation Resistance Testing, Vacuum Bottle Testing, and Dynamic Contact Resistance Measurement (DCRM), we ensure the reliability of your circuit breakers.</p>
     </div>

             </div>
             <div className='text-center shadow-xl rounded-lg px-4 py-4 bg-gray-100'>
     <div className='overflow-hidden'>
     <img
        src={f3}
       
        className='h-[10vh]  animate-bounce rounded-lg mx-auto'
      />
    <p className='font-poppins font-extrabold text-[20px] leading-[24px] mt-12 text-yellow-500'>Current Transformer Services</p>
     <p className='my-3'> Tan Delta Measurement, Insulation Resistance Testing, Ratio Testing (by Primary or Secondary Injection), Knee Point Testing, and Winding Resistance Testing are among the specialized services we offer for current transformers.</p> 
     </div>

             </div>
             <div className='text-center shadow-xl rounded-lg px-4 py-4 bg-gray-100'>
     <div className='overflow-hidden'>
     <img
        src={f4}
       
        className='h-[10vh]  animate-bounce rounded-lg mx-auto'
      />
    <p className='font-poppins font-extrabold text-[20px] leading-[24px] mt-12 text-yellow-500'>Potential Transformer / IVT / CVT Services</p>
      <p className='my=3'> Our services in this category include Tan Delta Measurement, Insulation Resistance Testing, Ratio Analysis, and Winding Resistance Testing</p>
     </div>

             </div>
             <div className='text-center shadow-xl rounded-lg px-4 py-4 bg-gray-100'>
     <div className='overflow-hidden'>
     <img
        src={f5}
       
        className='h-[10vh]  animate-bounce rounded-lg mx-auto'
      />
    <p className='font-poppins font-extrabold text-[20px] leading-[24px] mt-12 text-yellow-500'>Relay Services</p>
      <p className='my-3'> Whether it's Electro-mechanical Relay Testing, Static Relay Testing, Numerical Relay Testing, or Differential Relay Testing, our comprehensive relay services ensure the optimal performance of your relays.

</p>
     </div>

             </div>
             <div className='text-center shadow-xl rounded-lg px-4 py-4 bg-gray-100'>
     <div className='overflow-hidden'>
     <img
        src={f6}
       
        className='h-[10vh]  animate-bounce rounded-lg mx-auto'
      />
    <p className='font-poppins font-extrabold text-[20px] leading-[24px] mt-12 text-yellow-500'>Gas Insulated Substation Services</p>
      <p className='my-3'>Covering Current Transformer Testing, Potential Transformer Testing, Circuit Breaker Testing, Lightning Arrester Testing, Isolator Testing, and Earth Switch Testing, we provide thorough testing for gas-insulated substations.</p>
     </div>

             </div>
        </m.div>
      </div>
 
      </div> 


      {/* 2 part */}
     
      {/* 11 part */}
      {/* <div className='bg-white h-[50vh] flex justify-between py-5 px-10 items-center xs:px-5 lg:px-40 '>
       
        <div className=' items-center h-[40vh] mr-3 overflow-hidden'>
          <h1 className='text-[20px] font-semibold mb-3'>Transformer Services</h1>
          <ul className='list-none'>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              SFRA (Sweep Frequency Response Analysis)
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Tan Delta Measurement
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Insulation Resistance Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Winding Resistance Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Magnetic Balance & Magnetizing Current Analysis
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Short Circuit Testing
            </li>
          </ul>
        </div>
        <div className='overflow-hidden'>
          <img src={mf1} className='h-[45vh] hover:scale-110 duration-500 rounded-lg' alt='Your Alt Text' />
        </div>
    
      </div> */}
   
      {/* 22 part */}
      {/* <div className=' h-[50vh] flex justify-between px-10 py-5 border-t-[1px] border-t-[#3F3E45]  xs:px-5 lg:px-40 items-center' >
        <div className='overflow-hidden'>
          <img src={mf1} className='h-[45vh]  hover:scale-110 duration-500 rounded-lg' alt='Your Alt Text' />
        </div>
        <div className='ml-5 items-center h-[40vh] overflow-hidden'>
          <h1 className='text-[20px] font-semibold mb-3'>Circuit Breaker Services</h1>
          <ul className='list-none'>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Contact Resistance Measurement
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Timing Analysis
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Insulation Resistance Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Vacuum Bottle Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              DCRM (Dynamic Contact Resistance Measurement)
            </li>
          </ul>
        </div>
    
      </div> */}
      {/* 33 part */}
      {/* <div className=' h-[50vh] flex justify-between px-10 py-5 border-t-[1px] border-t-[#3F3E45]  xs:px-5 lg:px-40 items-center' >
       
        <div className='mr-5 items-center h-[40vh] overflow-hidden'>
          <h1 className='text-[20px] font-semibold mb-3'>Current Transformer Services</h1>
          <ul className='list-none'>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Tan Delta Measurement
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Insulation Resistance Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Ratio Testing (Primary or Secondary Injection)
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Knee Point Testing
            </li>
            Winding Resistance Testing
          </ul>
        </div>
        <div className='overflow-hidden'>
          <img src={mf1} className='h-[45vh] hover:scale-110 duration-500 rounded-lg' alt='Your Alt Text' />
        </div>
    
      </div> */}
      {/* 44 part */}
      {/* <div className=' h-[50vh] flex justify-between px-10 py-5 border-t-[1px] border-t-[#3F3E45]  xs:px-5 lg:px-40 items-center' >
        <div className='overflow-hidden'>
          <img src={mf1} className='h-[45vh] hover:scale-110 duration-500 rounded-lg' alt='Your Alt Text' />
        </div>
        <div className='ml-5 items-center h-[40vh] overflow-hidden'>
          <h1 className='text-[20px] font-semibold mb-3'>Potential Transformer / IVT / CVT Services</h1>
          <ul className='list-none'>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Tan Delta Measurement
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Insulation Resistance Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Ratio Analysis
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Winding Resistance Testing
            </li>
          </ul>
        </div>
    
      </div> */}
      {/* 55 part */}
      {/* <div className=' h-[50vh] flex justify-between px-10 py-5 border-t-[1px] border-t-[#3F3E45]  xs:px-5 lg:px-40 items-center' >
       
        <div className='mr-5 items-center h-[40vh] overflow-hidden'>
          <h1 className='text-[20px] font-semibold mb-3'>Relay Services</h1>
          <ul className='list-none'>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Electro-mechanical Relay Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Static Relay Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Numerical Relay Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Differential Relay Testing, etc.
            </li>
          </ul>
        </div>
        <div className='overflow-hidden'>
          <img src={mf1} className='h-[45vh] hover:scale-110 duration-500 rounded-lg' alt='Your Alt Text' />
        </div>
    
      </div> */}
      {/* 66 part */}
      {/* <div className='mb-20 h-[50vh] flex justify-between px-10 py-5 border-t-[1px] border-t-[#3F3E45]  xs:px-5 lg:px-40 items-center' >
        <div className='overflow-hidden'>
          <img src={mf1} className='h-[45vh] hover:scale-110 duration-500 rounded-lg' alt='Your Alt Text' />
        </div>
        <div className='ml-5  items-center h-[40vh] overflow-hidden'>
          <h1 className='text-[20px] font-semibold mb-3'>Gas Insulated Substation Services</h1>
          <ul className='list-none'>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Current Transformer Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Potential Transformer Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Circuit Breaker Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Lightning Arrester Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Isolator Testing
            </li>
            <li>
              <img src={check} alt='Check' className='w-4 h-4 inline-block mr-2' />
              Earth Switch Testing
            </li>
          </ul>
        </div>
    
      </div> */}
  
      <Footer/>
    </div>
  );
}

export default Page2;


