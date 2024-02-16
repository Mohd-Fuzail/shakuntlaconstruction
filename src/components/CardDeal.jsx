// import React from 'react'
// import { card } from '../assets'
// import Button from './Button'
// import styles, { layout } from '../style'

// const CardDeal = () => {
//   return (
//     <section className={layout.section}>
//       <div className={layout.sectionInfo}>
//         <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>in few easy steps.</h2>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Arcu tortor,
//           purus in mattis at sed integer faucibus.
//           Aliquet quis aliquet eget mauris tortor.ç 
//           Aliquet ultrices ac, ametau.
//         </p>
//         <Button styles='mt-10'/>
//       </div>
//       <div className={layout.sectionImg}>
//         <img
//           src={card}
//           alt='card'
//           className='w-[100%] h-[100%]'
//         />
        
//       </div>
//       <div className={layout.sectionImg}>
//         <img
//           src={card}
//           alt='card'
//           className='w-[100%] h-[100%]'
//         />
        
//       </div>
//     </section>
//   )
// }

// export default CardDeal
// import React from 'react'
// import { feedback, feedback1 } from '../constants'
// import styles from '../style'
// import Feedback from './Feedback'
// import Feedback1 from './Feedback1'
// import { motion as m } from 'framer-motion';


// const CardDeal = () => {
//   return (
//     <section id='clients' className={` ${styles.flexce} py-10 flex-col relative bg-gray-100`}>
//       <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full  bottom-40'/>
//       <div className='w-full   items-center sm:mb-16 mb-6 relative z-[1]'>
//         <h2 className={`text-center font-poppins ${styles.heading2}`}>Projects</h2>
        
//       </div>
//       <div className='overflow-hidden'>
//       <m.div 
//         animate={0 ? { y: 0 } : { y: '100%' }}
//         initial={{ y: '100%' }}
//         transition={{ delay: .5, duration: .5 }}
//       className='max-w-[1320] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-[20px]'>
//         {feedback1.map((card) => (
//           <Feedback1 key={card.id} {...card}/>        
//         ))}
//       </m.div> 
//       </div>
//     </section>
//   )
// }

// export default CardDeal

import React from 'react';
import { feedback1 } from '../constants';
import styles from '../style';
import Feedback1 from './Feedback1';
import { motion as m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CardDeal = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const animationVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: '50%', opacity: 0 },
  };

  return (
    <section id='clients' className={` ${styles.flexce} py-5 flex-col relative bg-gray-100`} ref={ref}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full  bottom-40' />
      <div className='w-full   items-center sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={`text-center font-poppins ${styles.heading2}`}>Projects</h2>
      </div>
      <div className='overflow-hidden'>
        <m.div
          variants={animationVariants}
          animate={inView ? 'visible' : 'hidden'}
          initial='hidden'
          transition={{ delay: .5, duration: .75 }}
          className='max-w-[1320] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-[20px]'>
          {feedback1.map((card) => (
            <Feedback1 key={card.id} {...card} />
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default CardDeal;
