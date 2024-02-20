import React, { useState,useEffect } from 'react'

import { motion  } from "framer-motion"
import { aa1, aa2, aa3, aa4, aa5, aa6, check, discount, mf1, p1, p2, p3, q1, robot } from '../assets'
import GetStarted from './GetStarted'
import { container, item } from '../../aniamation'
import Footer from './Footer'
import { clients } from '../constants'
import styles, { layout } from '../style';

function Page1() {

 
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  
    const handleNext = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 1) % 5
        );
        return updatedIndexes;
      });
    };
  
    const handleBack = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 4) % 5
        );
  
        return updatedIndexes;
      });
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        handleNext();
      }, 2000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [])
  
    const images = [mf1, mf1, mf1, mf1, mf1];
  
    const positions = ["center", "left1", "left", "right", "right1"];
  
    const imageVariants = {
      center: { x: "0%", scale: 1, zIndex: 5 },
      left1: { x: "-50%", scale: 0.7, zIndex: 3 },
      left: { x: "-90%", scale: 0.5, zIndex: 2 },
      right: { x: "90%", scale: 0.5, zIndex: 1 },
      right1: { x: "50%", scale: 0.7, zIndex: 3 },
    };
  
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
    
    <div className={` w-[100%] h-[40vh]  bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixed xs:h-[45vh] ${styles.flexStart}`}>
      <div className='w-[100%] h-[40vh] bg-[rgba(0,0,0,0.57)] xs:h-[45vh] '>
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
            <h1 className='text-[35px] font-semibold py-10 text-center'>Clients</h1>
        </div>
  <div className="w-full inline-flex flex-nowrap overflow-hidden">
  <div className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
    
      <img src={aa1} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa2} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa3} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa4} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa5} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa6} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
    </div>
    <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
      {/* Content to be horizontally scrolled */}
      <img src={aa1} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa2} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa3} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa4} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa5} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      <img src={aa6} className='sm:w-[192px] w-[100px] h-[13vh] mr-5 object-contain'/>
      {/* Repeat your content as needed */}
    </div>
  </div>
  {/* <div className={` w-[100%] h-[100vh]  bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixed ${styles.flexStart}`}>
      <div className='w-[100%] h-[100vh] bg-[rgba(117,196,228,0.76)] '> */}
 
</div>
<hr className='w-90 items-center h-1  my-0 mt-10 bg-gray-300 border-0 rounded'/>

<section id='product' className={`bg-white bg-center justify-center  ${layout.sectionReverse}`}>
      <div className={`bg-[url('./assets/q1.png')]  bg-center bg-cover rounded-[100px] h-[82vh]  ${layout.sectionImgReverse}`}>
      </div>
      <div className={`pl-10 py-10 bg-gradient-to-b from-fuchsia-300 to-cyan-900 mx-20 xs:mx-5 xs:my-10 rounded-[30px] hover:scale-105 duration-500 ${layout.sectionInfo}`}>
        <h2 className='text-[40px] font-mono'>Our Contact Detail</h2>
        
        
        
       
       
       <div className=' items-center  mr-3 mt-10'>
         
         <ul className='list-none'>
           <li className='text-white flex text-[25px] my-8'>
             <img src={p3} alt='Check' className='mr-8 w-12 h-12 inline-block ' />
             <span className='font-extrabold '>PlotNo:</span> 1413 Ground Floor Manjhawan Kanpur 209214 Utter Pradesh
           </li>
           <li className='text-white flex text-[25px] my-8'>
             <img src={p2} alt='Check' className='mr-8 w-12 h-12 inline-block ' />
             <span className='font-extrabold'>Tel:</span>+91 7524846367 
           </li>
           <li className='text-white flex text-[25px] my-8'>
             <img src={p1} alt='Check' className='mr-8 w-12 h-12 inline-block ' />
             <span className='font-extrabold'>Email:</span>ho@shakuntlagroup.com
           </li>
          
         </ul>
    
     </div>
        {/* Use Link to navigate to the "/page1" route */}
        
      </div>
      
    </section>
    <hr className='w-90 h-1 mx-auto mb-10 bg-gray-300 border-0 rounded'/>

    
    
    <Footer />
    </div>
)}

export default Page1





//   const imageVariants = {
//     center: { x: "0%", scale: 1, zIndex: 5 },
//     left1: { x: "-50%", scale: 0.7, zIndex: 3 },
//     left: { x: "-90%", scale: 0.5, zIndex: 2 },
//     right: { x: "90%", scale: 0.5, zIndex: 1 },
//     right1: { x: "50%", scale: 0.7, zIndex: 3 },
//   };
//   return (
//     <div className="flex items-center flex-col justify-center bg-black h-screen">
//       {images.map((image, index) => (
//         <motion.img
//           key={index}
//           src={image}
//           alt={image}
//           className="rounded-[12px]"
//           initial="center"
//           animate={positions[positionIndexes[index]]}
//           variants={imageVariants}
//           transition={{ duration: 0.5 }}
//           style={{ width: "40%", position: "absolute" }}
//         />
//       ))}
//       <div className="flex flex-row gap-3">
//         <button
//           className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
//           onClick={handleBack}
//         >
//           Back
//         </button>
//         <button
//           className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };


// const ImageSlider = () => {
//   const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

//   const handleNext = () => {
//     setPositionIndexes((prevIndexes) => {
//       const updatedIndexes = prevIndexes.map(
//         (prevIndex) => (prevIndex + 1) % 5
//       );
//       return updatedIndexes;
//     });
//   };

//   const handleBack = () => {
//     setPositionIndexes((prevIndexes) => {
//       const updatedIndexes = prevIndexes.map(
//         (prevIndex) => (prevIndex + 4) % 5
//       );

//       return updatedIndexes;
//     });
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       handleNext();
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []); // Run this effect only once on component mount

//   const images = [city1, city2, city3, planet1, planet2];

//   const positions = ["center", "left1", "left", "right", "right1"];

//   const imageVariants = {
//     center: { x: "0%", scale: 1, zIndex: 5 },
//     left1: { x: "-50%", scale: 0.7, zIndex: 3 },
//     left: { x: "-90%", scale: 0.5, zIndex: 2 },
//     right: { x: "90%", scale: 0.5, zIndex: 1 },
//     right1: { x: "50%", scale: 0.7, zIndex: 3 },
//   };

//   return (
//     <div className="flex items-center flex-col justify-center bg-black h-screen">
//       {images.map((image, index) => (
//         <motion.img
//           key={index}
//           src={image}
//           alt={image}
//           className="rounded-[12px]"
//           initial="center"
//           animate={positions[positionIndexes[index]]}
//           variants={imageVariants}
//           transition={{ duration: 0.5 }}
//           style={{ width: "40%", position: "absolute" }}
//         />
//       ))}
//       <div className="flex flex-row gap-3">
//         <button
//           className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
//           onClick={handleBack}
//         >
//           Back
//         </button>
//         <button
//           className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
