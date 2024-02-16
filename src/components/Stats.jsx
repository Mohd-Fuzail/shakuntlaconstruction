// import React from 'react'
// import { stats } from '../constants'
// import styles from '../style'
// import { motion as m } from "framer-motion"

// const Stats = () => {
//   return (
//     <section className={`${styles.flexCenter} pl-20  bg-yellow-500 w-[100%] flex-row flex-wrap sm:mb-20 mb-6`}>
//       {stats.map((stat) => (
//         <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
//           <div className='overflow-hidden'>
//           <m.h4 
          
//           animate={{y:0}}
//           initial={{y:'100%'}}
//           transition={{delay:0.5,duration:0.5}}
//           className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-transparent  bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600'>{stat.value}</m.h4>

//           </div>
          
//           <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white uppercase ml-3'>{stat.title}</p>
       
//         </div>
//       ))}
//     </section>
//   )
// }

// export default Stats
// // //font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500

import React, { useRef } from 'react';
import { stats } from '../constants';
import styles from '../style';
import { motion as m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} mt-8 pl-20 bg-gradient-to-r from-yellow-500 to-orange-500 w-[100%] flex-row flex-wrap mb-8`}>
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </section>
  );
};

const StatCard = ({ stat }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={`flex-1 flex justify-start items-center flex-row m-3`}>
      <div className='overflow-hidden'>
        <m.h4
          animate={inView ? { y: 0 } : { y: '100%' }}
          initial={{ y: '100%' }}
          transition={{ delay: .5, duration: .5 }}
          className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-transparent  bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600'
        >
          {stat.value}
        </m.h4>
      </div>
      <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white uppercase ml-3'>{stat.title}</p>
    </div>
  );
};

export default Stats;
