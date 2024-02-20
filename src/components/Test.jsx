import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feed from './Feed'
import { TypeAnimation } from 'react-type-animation';
const Test = () => {
  return (
    // <div className={` w-[100%] h-[100vh]  bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixed ${styles.flexStart}`}>
    //   <div className='w-[100%] h-[100vh] bg-[rgba(117,196,228,0.76)] '></div>
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} mt-8 flex-col relative bg-[url('./assets/mf3.jpg')] bg-center bg-cover bg-fixed  rounded-[30px]`}>
   
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={`ml-10 text-white ${styles.heading2}`}>Testimonials</h2>
      </div>
      <div className='w-full md:mt-0 mt-0'>
          <p className={`${styles.paragraph} font-mono text-[20px] ml-10 mb-4 text-white`}>
          <span>
        <TypeAnimation
      sequence={[
        `${' '} Where satisfaction finds its voice, and experiences become the story!!!`, // Types 'One'
        1000, // Waits 1s
        `${' '}In the gallery of feedback, each testimonial paints a portrait of trust and triumph!!`, // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        `${' '}Client stories, a testament to the extraordinary journey we embark on together!!!!`, // Types 'Three' without deleting 'Two'
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
      
      <div className='max-w-[1320] ml-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-[20px]'>
        {feedback.map((card) => (
          <Feed key={card.id} {...card}/>        
        ))}
      </div>      
    </section>
  )
}

export default Test
