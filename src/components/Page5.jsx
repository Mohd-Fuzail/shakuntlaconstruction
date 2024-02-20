import React from 'react'
import styles from '../style'
import { motion as m } from "framer-motion"
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import { container, item } from '../../aniamation'
import Footer from './Footer'
import { TypeAnimation } from 'react-type-animation';
import { feedback2, feedback3, feedback4 } from '../constants';

import Feedback1 from './Feedback1';

import { useInView } from 'react-intersection-observer';
import Feedback2 from './Feedback2'
function Page5() {
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
          <h1 className={`text-center ${styles.flexCenter} ${styles.paddingY} text-white font-extrabold my-5 text-[60px]`}>Gallery</h1>
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
      <div className=" pt-5 columns-50xs"ref={ref}>
        <figure className="py-4 bg-[rgba(248,247,247,0.25)] rounded-[30px] mx-10 hover:scale-105 duration-500  [break-inside:avoid]">
        <h1 className='text-white text-center text-[35px] mb-10'>Transformer Erection Work</h1>
        <m.div
          variants={animationVariants}
          animate={inView ? 'visible' : 'hidden'}
          initial='hidden'
          transition={{ delay: .25, duration: 1 }}
          className='max-w-full mx-auto grid lg:grid-cols-4 md:grid-cols-3 ss:grid-cols-3 xs:grid-cols-2  gap-1 px-[60px]'>
          {feedback4.map((card) => (
            <Feedback2 key={card.id} {...card} />
          ))}
        </m.div>
            </figure>
        
        </div>
        <div className=" pt-5 columns-50xs"ref={ref}>
        <figure className="py-4 bg-[rgba(248,247,247,0.25)] rounded-[30px] mx-10 hover:scale-105 duration-500  [break-inside:avoid]">
        <h1 className=' text-white text-center text-[35px] mb-10'>Electrical Panel Testing and Commissioning</h1>
        <m.div
          variants={animationVariants}
          animate={inView ? 'visible' : 'hidden'}
          initial='hidden'
          transition={{ delay: .25, duration: 1 }}
          className='max-w-full mx-auto grid lg:grid-cols-4 md:grid-cols-3 ss:grid-cols-3 xs:grid-cols-2  gap-1 px-[60px]'>
          {feedback2.map((card) => (
            <Feedback2 key={card.id} {...card} />
          ))}
        </m.div>
            </figure>
        
        </div>
        <div className=" pt-5 columns-50xs"ref={ref}>
        <figure className="py-4 bg-[rgba(248,247,247,0.25)] rounded-[30px] mx-10 hover:scale-105 duration-500  [break-inside:avoid]">
          <h1 className='text-white text-center text-[35px] mb-10'>Cable Tray Work</h1>
        <m.div
          variants={animationVariants}
          animate={inView ? 'visible' : 'hidden'}
          initial='hidden'
          transition={{ delay: .25, duration: 1 }}
          className='max-w-full mx-auto grid lg:grid-cols-4 md:grid-cols-3 ss:grid-cols-3 xs:grid-cols-2  gap-1 px-[60px]'>
          {feedback3.map((card) => (
            <Feedback2 key={card.id} {...card} />
          ))}
        </m.div>
            </figure>
        
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Page5
// import React, { useState, useEffect } from 'react';
// import { motion as m } from "framer-motion"
// import Feedback2 from './Feedback2'
// import { feedback2 } from '../constants';
// import { useInView } from 'react-intersection-observer';


// const Page5 = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//   });

//   const animationVariants = {
//     visible: { x: 0, opacity: 1 },
//     hidden: { x: '50%', opacity: 0 },
//   };
  
//   return (
//     <div className="w-full min-h-screen font-sans text-gray-900">
//       <nav className="border-b border-gray-200">
//         <div className="px-4 mx-auto max-w-7xl">
//           <div className="flex gap-x-2 justify-between items-center md:gap-x-6 h-18">
//             <button className="inline-block md:hidden" href="#">
             
//             </button>
//             <a className="hidden md:inline-block" href="#">
            
//             </a>
//             <ul className="hidden text-gray-700 md:flex md:gap-x-8 md:items-center">
//               <li>
//                 <a className="font-medium hover:text-gray-900" href="#">
//                   Feed
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-900" href="#">
//                   Discover
//                 </a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-900" href="#">
//                   Community
//                 </a>
//               </li>
//             </ul>
//             <input
//               className="hidden sm:inline-block flex-1 py-1.5 px-4 mx-4 text-gray-700 bg-gray-100 rounded-full border border-gray-100 transition focus:outline-none focus:bg-white focus:border-gray-700"
//               type="text"
//               placeholder="Search"
//             />
//             <div className="flex flex-row-reverse gap-x-2 items-center md:gap-x-4 lg:flex-row">
//               <button className="hidden lg:inline-block">
               
//               </button>
//               <button className="hidden lg:inline-block py-1.5 px-5 rounded-full border border-gray-200">
//                 Upload
//               </button>
//               <button className="object-cover overflow-hidden w-10 h-10 rounded-full border border-gray-200">
//                 <img src="#" alt="" />
//               </button>
//               <span className="flex gap-x-1 items-center">
                
//                 <button className="text-sm leading-none hover:underline">1,331</button>
//               </span>
//               <span className="flex gap-x-1 items-center">
                
//                 <button className="text-sm leading-none hover:underline">15.8k</button>
//               </span>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="py-14 px-4 mx-auto max-w-7xl">
//         <div>
//           <div className="flex items-center">
//             <h1 className="text-4xl font-medium">People & Nature</h1>
//             <button className="ml-4 leading-6 py-1.5 px-5 text-sm text-white bg-indigo-600 rounded-full">
//               Follow
//             </button>
//             <button className="ml-2 leading-6 py-1.5 px-5 text-sm rounded-full border border-gray-200">
//               Edit
//             </button>
//           </div>
//           <p className="pt-3 text-lg text-gray-700">
//             Photos that look like taken straight out of a fairy tale book.
//           </p>
//           <div className="inline-flex gap-x-2 items-center pt-2 text-sm text-gray-500">
//             <span>36 photos from 24 people. Curated by</span>
//             <img
//               className="object-cover w-7 h-7 rounded-full"
//               src="#"
//               alt=""
//             />
//             <a href="#" className="hover:text-indigo-600">
//               Alan Prince
//             </a>
//           </div>
//         </div>

//         <div className="flex gap-x-8 items-center pt-12">
//           <a href="#" className="text-lg font-medium">
//             Popular
//           </a>
//           <a href="#" className="text-lg text-indigo-500">
//             Recent
//           </a>
//         </div>
//         <div className=" pt-5 columns-50xs"ref={ref}>
//         <figure className="py-4  [break-inside:avoid]">
//         <m.div
//           variants={animationVariants}
//           animate={inView ? 'visible' : 'hidden'}
//           initial='hidden'
//           transition={{ delay: .25, duration: 1 }}
//           className='max-w-full mx-auto grid lg:grid-cols-4 md:grid-cols-3 ss:grid-cols-3 xs:grid-cols-2  gap-1 px-[60px]'>
//           {feedback2.map((card) => (
//             <Feedback2 key={card.id} {...card} />
//           ))}
//         </m.div>
//             </figure>
        
//         </div>
//         <div className="flex justify-center items-center py-12">
          
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Page5;
