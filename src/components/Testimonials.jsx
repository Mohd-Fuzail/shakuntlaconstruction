import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'
import { f1, f2, f3, f4, f5, f6 } from '../assets'
import { motion as m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';


const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const animationVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: '50%', opacity: 0 },
  };
  return (
    <>
    {/* <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full  bottom-40'/>
      <div className='w-full   items-center sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={`text-center font-poppins ${styles.heading2}`}>Service</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-center mt-10 font-mono`}>
          Elevate the reliability of your electrical systems with our dedicated maintenance services
          </p>  
        </div>
      </div>
    
      <div className='max-w-[1320] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-[20px]'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card}/>        
        ))}
      </div> 
    </section> */}
    <hr className='w-90 h-1 mx-auto my-4 mt-20 bg-white border-0 rounded'/>
    {/* <div className="inline-flex items-center justify-center w-full">
    <hr className="w-80 h-[4px] my-8 bg-white border-0 rounded "/>
    <span className={`absolute px-3 font-bold text-[35px] text-black -translate-x-1/2 bg-white left-1/2`} >Services</span>
</div> */}
 <div className='w-full bg-white rounded-[30px]  items-center sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={`text-center font-poppins ${styles.heading2}`}>Service</h2>
      </div>
      <div className='w-full md:mt-0 mt-2'>
          <p className={`${styles.paragraph} font-mono text-[30px] text-center mt-1 mb-4 text-white`}>
          <span>
        <TypeAnimation
      sequence={[
        `${' '}Area of Expertise!!!`, // Types 'One'
        1000, // Waits 1s
        `${' '}Domain Knowledge!!`, // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        `${' '}Specialization!!!!`, // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    
     
    />
    </span>
          </p>  
        </div>
<hr className='w-48 h-1 mx-auto  bg-white border-0 rounded'/>
    <div className={` ${styles.flexce} py-5 flex-col relative bg-blue-200`} ref={ref}>
     
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
      <hr className='w-90 h-1 mx-auto my-0 mt-10 bg-white border-0 rounded'/>
      <hr className='w-50 h-1 mx-auto mt-5 bg-white border-0 rounded'/>
 
      </div> 
    </>
  )
}

export default Testimonials
