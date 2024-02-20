import React from 'react'
import styles from '../style'
import { motion as m } from "framer-motion"
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import { container, item } from '../../aniamation'
import Footer from './Footer'
import { TypeAnimation } from 'react-type-animation';
import { feedback } from '../constants';

import Feedback from './Feedback';

import { useInView } from 'react-intersection-observer';
import Feedback2 from './Feedback2'
function Page4() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const animationVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: '50%', opacity: 0 },
  };
  return (
    <div>
           <div className={` w-[100%] h-[40vh]  bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixed ${styles.flexStart}`}>
      <div className='w-[100%] h-[40vh] bg-[rgba(117,196,228,0.76)] '>
        <div className={`${styles.boxWidth}`}>
          <h1 className={`text-center ${styles.flexCenter} ${styles.paddingY} text-white font-extrabold my-5 text-[60px]`}>Blogs</h1>
        </div>
      </div>
    </div>
    <section id='clients' className={` ${styles.flexce}  flex-col relative bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixed`} ref={ref}>
    <div className=' bg-[rgba(0,0,0,0.42)] pb-20 '>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full  bottom-40' />
      <div className='w-full   items-center sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={`text-white text-[30px] font-poppins px-5 pt-10`}>Visual Archive</h2>
        {/* part 2 */}
      
        <p className='text-yellow-400 font-mono text-[19px] px-6 pt-4'>Where moments become memories, and every frame tells a unique story. Our curated collection captures the essence of our services
        <span>
        <TypeAnimation
      sequence={[
        `${' '}in vivid snapshots!!!`, // Types 'One'
        1000, // Waits 1s
        `${' '}captured vividly!!`, // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        `${' '}in vivid snapshots!!!!`, // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
     
    />
    </span></p>
         {/* end of part 2    */}
      </div>

      <div className='overflow-hidden'>
        <m.div
          variants={animationVariants}
          animate={inView ? 'visible' : 'hidden'}
          initial='hidden'
          transition={{ delay: .25, duration: 1 }}
          className='max-w-[1320] mx-auto grid lg:grid-cols-3 md:grid-cols-3 ss:grid-cols-2  gap-6 px-[80px]'>
          {feedback.map((card) => (
            <Feedback key={card.id} {...card} />
          ))}
        </m.div>
      </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Page4
