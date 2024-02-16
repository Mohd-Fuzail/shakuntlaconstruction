import styles from '../style'
import { motion as m } from "framer-motion"
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import { container, item } from '../../aniamation'

const Hero = () => {
  
  return (
    
    // <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} `}>
    <section id='home' className={`${styles.flexCenter} ${styles.paddingY} justify-between  px-10 flex-col md:flex-row `}>
      <div className={`flex-1 ${styles.flexStart}  max-w-[50%] flex-col xl:px-0 sm:px-16 px-6`}>
         
          
{/*           
            <div>
                <p>
                  ashg
                </p>
            </div>
            When It Comes To Reliability, We Are The One You Need!
          */}


          <div className='lg:text-6xl text-2xl'>
            <m.ul variants={container} initial="hidden" animate="show"
            className='item-center'
            >
               
              <div className='overflow-hidden '>
                <m.li variants={item} className='pb-2 text-white text-3xl text-center font-extrabold '>
                When It Comes To Reliability,
                </m.li>
              </div>
              <div className='overflow-hidden'>
                {/* <m.li variants={item} className='pb-2 font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 text-5xl text-center '> */}
                <m.li variants={item} className='pb-2 font-extrabold text-white text-5xl text-center '>     
                We Are The One You Need!
                </m.li>
              </div>
              <div className='overflow-hidden'>
                <m.li variants={item} className='pb-2 text-black text-base text-center font-extrabold '>
                To Illuminate
                </m.li>
              </div>
              <div className='overflow-hidden'>
                <m.li variants={item} className='pb-2 text-white text-2xl text-center font-extrabold '>
                Your Path to Safety and Reliability
                </m.li>
              </div>
            </m.ul>
          </div>
          
          </div>
          <section id='contactus' className='md:w-1/3 w-full flex flex-col justify-items-center overflow-hidden'>
          
        <m.div
          // variants={animationVariants}
          // animate={inView ? 'visible' : 'hidden'}
          animate={{y:0}}
          // initial='hidden'
          initial={{y:"100%"}}
          transition={{ delay: .5, duration: .75 }}
          className='w-full flex flex-col mb-4 bg-blue-500 rounded-lg py-10 px-8'>
         
          <h1 className='text-white mb-5 text-[30px] font-bold'>Contact us</h1>
          <input type='text' placeholder='Name' className='mb-4 py-2 px-3 rounded-lg' />
          <input type='email' placeholder='Email' className='mb-4 py-2 px-3 rounded-lg' />
          <input type='integer' placeholder='Contact Detail' className='mb-4 py-2 px-3 rounded-lg' />
          <textarea placeholder='Message' rows='4' className='mb-4 py-2 px-3 rounded-lg'></textarea>
          <button type='button' className={`py-1  bg-gradient-to-r from-purple-800 to-blue-700 font-poppins font-medium text-[18px] text-white outline-none mt-5  rounded-[10px]`}>
          Submit
    </button>
       
        </m.div>
      </section>








          {/* <div className='md:w-1/3 w-full flex flex-col justify-items-center'>
        <div className='w-full flex flex-col mb-4 bg-blue-500 rounded-lg py-10 px-8'>
          <h1 className='text-white mb-5 text-[30px] font-bold'>Contact us</h1>
          <input type='text' placeholder='Name' className='mb-4 py-2 px-3 rounded-lg' />
          <input type='email' placeholder='Email' className='mb-4 py-2 px-3 rounded-lg' />
          <input type='integer' placeholder='Contact Detail' className='mb-4 py-2 px-3 rounded-lg' />
          <textarea placeholder='Message' rows='4' className='mb-4 py-2 px-3 rounded-lg'></textarea>
          <button type='button' className={`py-1  bg-gradient-to-r from-purple-800 to-blue-700 font-poppins font-medium text-[18px] text-white outline-none mt-5  rounded-[10px]`}>
          Submit
    </button>
        </div>
        </div> */}
    </section>
  )
}

export default Hero
// import styles from '../style';
// import { motion as m } from 'framer-motion';
// import { discount, robot } from '../assets';
// import GetStarted from './GetStarted';
// import { container, item } from '../../aniamation';

// const Hero = () => {
//   return (
//     <section
//       id='home'
//       className={`${styles.flexCenter} ${styles.paddingY} justify-between px-6 flex-col md:flex-row`}
//     >
//       <div className={`flex-1 ${styles.flexStart} max-w-full sm:max-w-[50%] flex-col sm:px-4 md:px-0`}>
//         <div className='lg:text-6xl text-2xl'>
//           <m.ul variants={container} initial='hidden' animate='show' className='item-center'>
//             <div className='overflow-hidden'>
//               <m.li variants={item} className='pb-2 text-white text-3xl text-center font-extrabold'>
//                 Empowering Excellence in Electrical Care:
//               </m.li>
//             </div>
//             <div className='overflow-hidden'>
//               <m.li
//                 variants={item}
//                 className='pb-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 text-5xl text-center'
//               >
//                 Pioneering Maintenance, Rigorous System Testing, and Precision Motor Services
//               </m.li>
//             </div>
//             <div className='overflow-hidden'>
//               <m.li variants={item} className='pb-2 text-black text-base text-center font-extrabold'>
//                 To Illuminate
//               </m.li>
//             </div>
//             <div className='overflow-hidden'>
//               <m.li variants={item} className='pb-2 text-white text-2xl text-center font-extrabold'>
//                 Your Path to Safety and Reliability
//               </m.li>
//             </div>
//           </m.ul>
//         </div>
//       </div>
//       <div className='md:w-1/2 w-full flex flex-col justify-items-center'>
//         <div className='w-full flex flex-col mb-4 bg-blue-500 rounded-lg py-10 px-6'>
//           <h1 className='text-white mb-5 text-[30px] font-bold text-center'>Contact us</h1>
//           <input type='text' placeholder='Name' className='mb-4 py-2 px-3 rounded-lg' />
//           <input type='email' placeholder='Email' className='mb-4 py-2 px-3 rounded-lg' />
//           <textarea
//             placeholder='Message'
//             rows='4'
//             className='mb-4 py-2 px-3 rounded-lg resize-none'
//           ></textarea>
//           <button
//             type='button'
//             className={`py-1 bg-gradient-to-r from-purple-800 to-blue-700 font-poppins font-medium text-[18px] text-white outline-none mt-5 rounded-[10px]`}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
