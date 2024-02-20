
import styles from '../style';
import { motion as m } from 'framer-motion';
import { container, item } from '../../aniamation';
import { useForm, ValidationError } from '@formspree/react';

const Hero = () => {
  const [state, handleSubmit] = useForm("mpzvdezk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <section
      id='home'
      className={`${styles.flexCenter} ${styles.paddingY} justify-between xs:px-2 lg:px-10 flex-col md:flex-row `}
    >
      <div className={`flex-1 ${styles.flexStart}  max-w-[50%] flex-col xl:px-0 xs:px-0 `}>
        <div className='lg:text-6xl text-2xl'>
          <m.ul
            variants={container}
            initial='hidden'
            animate='show'
            className='item-center'
          >
            <div className='overflow-hidden '>
              <m.li
                variants={item}
                className='pb-2 text-white text-3xl text-center font-extrabold xs:text-[20px]'
              >
                When It Comes To Reliability,
              </m.li>
            </div>
            <div className='overflow-hidden'>
              <m.li
                variants={item}
                className='pb-2 font-extrabold text-white text-5xl  text-center '
              >
                We Are The One You Need!
              </m.li>
            </div>
            <div className='overflow-hidden'>
              <m.li
                variants={item}
                className='pb-2 text-black text-base text-center font-extrabold '
              >
                To Illuminate
              </m.li>
            </div>
            <div className='overflow-hidden'>
              <m.li
                variants={item}
                className='pb-2 text-white text-2xl text-center font-extrabold xs:text-[20px] '
              >
                Your Path to Safety and Reliability
              </m.li>
            </div>
          </m.ul>
        </div>
      </div>

      {window.innerWidth >= 1070 && (
        <section
          id='contactus'
          className='md:w-1/3 w-full flex flex-col justify-items-center overflow-hidden '
        >
          <m.div
            animate={{ y: 0 }}
            initial={{ y: '100%' }}
            transition={{ delay: 0.5, duration: 0.75 }}
            className='w-full flex flex-col mb-4 bg-blue-500 rounded-[30px] py-6 px-8 lg:py-10 '
          >
            <h1 className='text-white mb-5 text-[30px] font-bold'>Contact us</h1>
            
            
            
            
            <input
              type='text'
              placeholder='Name'
              className='mb-4 py-2 px-3 rounded-lg'
            />
            <input
              type='email'
              placeholder='Email'
              className='mb-4 py-2 px-3 rounded-lg'
            />
            <input
              type='integer'
              placeholder='Contact Detail'
              className='mb-4 py-2 px-3 rounded-lg'
            />
            <textarea
              placeholder='Message'
              rows='2'
              className='mb-4 py-2 px-3 rounded-lg'
            ></textarea>
            <button
              type='button'
              className={`py-1  bg-gradient-to-r from-purple-800 to-blue-700 font-poppins font-medium text-[18px] text-white outline-none mt-5  rounded-[10px]`}
            >
              Submit
            </button>
          </m.div>
        </section>
      )}
    </section>
  );
};

export default Hero;
