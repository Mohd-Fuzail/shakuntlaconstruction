import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'


const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
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
    </section>
  )
}

export default Testimonials
