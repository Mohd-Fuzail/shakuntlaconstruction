import React from 'react'
import styles from '../style'
import { motion as m } from "framer-motion"
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import { container, item } from '../../aniamation'
import Footer from './Footer'

function Page1() {
  return (
   <div>
     <div className={` w-[100%] h-[40vh]  bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixed ${styles.flexStart}`}>
      <div className='w-[100%] h-[40vh] bg-[rgba(117,196,228,0.76)] '>
        <div className={`${styles.boxWidth}`}>
          <h1 className={`text-center ${styles.flexCenter} ${styles.paddingY} text-white font-extrabold my-5 text-[60px]`}>About Us</h1>
        </div>
      </div>
    </div>
    <div className={` bg-white px-20 sm:h-[100vh] sm:mb-60   ${styles.paddingY} ${styles.boxWidth}`}>
        <h1 className={`${styles.paddingY}  font-bold text-[30px]`}>What we do ???</h1>
        <p className={`text-ellipsis overflow-hidden h-[100vh] text-[17px] leading-loose font-mono xs:text-[13px]  sm:text-[16px] ss:text-[15px] lg:text-[20px]`}>Welcome to Elec Tricks Engineers, a pioneering force in the realm of Power Sector and Substation Testing Instruments. Established with unwavering commitment in May 2022, Elec Tricks Engineers boasts an impressive journey marked by unparalleled expertise in the domain.

Our corporate headquarters, strategically located at ADDRESS, serves as the nerve center for our swift and efficient service delivery to a diverse clientele. We extend our services to Central and State Generation, Transmission and Distribution Companies, Power Utilities, OEMs, EPCs, Railways, System Integrators, Testing Laboratories, and individual Testers. Our dedicated team of engineers ensures a comprehensive coverage that aligns seamlessly with the unique needs of each sector.

In a remarkably short span, Elec Tricks Engineers has etched its brand name across the Power Sector landscape, carving out a distinct niche. Our commitment to excellence, innovation, and reliability has solidified our standing, making us the preferred choice for a spectrum of industry players.

Join us on this journey as we continue to illuminate the path with cutting-edge solutions, unwavering dedication, and a vision for a sustainable and electrifying future.</p>

    </div>
    
    <div className={` w-[100%] h-[40vh]  bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixed ${styles.flexStart}`}>
      <div className='w-[100%] h-[40vh] bg-[rgba(0,0,0,0.57)] '>
        <div className={`${styles.boxWidth}`}>
        <div className={`h-[40vh]  ${styles.flexCenter}  ${styles.padding} sm:px-60 px-10 sm:flex-row flex-col`}>
        <div className='flex-1 flex flex-col '>
        <h2 className={`text-white ${styles.heading2}`}>Have Queries?</h2>
        <p className={`text-white ${styles.paragraph} max-w-[470px] mt-5`}>
       Feel free to contact us!!!
        </p>
      </div>
        <div className='h-[10vh] '>
        <a href={`#footers`}>
        <button type='button' className={`py-2 px-6 sm:py-4 bg-gradient-to-r from-blue-700 to-blue-500 font-poppins font-medium text-[18px] text-white outline-none mt-5  rounded-[10px]`}>
         Contact Us
    </button>
    </a>
        </div>

        </div>
      </div>
        
        </div>
       
    </div>

 


    {/* </div> */} 
    <div className='h-[50vh]  bg-gray-300 xs:px-20 lg:px-80'>
        <div>
            <h1 className='text-[35px] font-semibold py-10 text-center'>Partner</h1>
        </div>
  <div className="w-full inline-flex flex-nowrap overflow-hidden">
  <div className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
      {/* Content to be horizontally scrolled */}
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      {/* Repeat your content as needed */}
    </div>
    <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
      {/* Content to be horizontally scrolled */}
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      <p>Your content goes here</p>
      {/* Repeat your content as needed */}
    </div>
  </div>
</div>

    
    
    <Footer />
    </div>
)}

export default Page1