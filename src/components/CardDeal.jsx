// // import React from 'react'
// // import { card } from '../assets'
// // import Button from './Button'
// // import styles, { layout } from '../style'

// // const CardDeal = () => {
// //   return (
// //     <section className={layout.section}>
// //       <div className={layout.sectionInfo}>
// //         <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>in few easy steps.</h2>
// //         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
// //           Arcu tortor,
// //           purus in mattis at sed integer faucibus.
// //           Aliquet quis aliquet eget mauris tortor.ç 
// //           Aliquet ultrices ac, ametau.
// //         </p>
// //         <Button styles='mt-10'/>
// //       </div>
// //       <div className={layout.sectionImg}>
// //         <img
// //           src={card}
// //           alt='card'
// //           className='w-[100%] h-[100%]'
// //         />
        
// //       </div>
// //       <div className={layout.sectionImg}>
// //         <img
// //           src={card}
// //           alt='card'
// //           className='w-[100%] h-[100%]'
// //         />
        
// //       </div>
// //     </section>
// //   )
// // }

// // export default CardDeal
// // import React from 'react'
// // import { feedback, feedback1 } from '../constants'
// // import styles from '../style'
// // import Feedback from './Feedback'
// // import Feedback1 from './Feedback1'
// // import { motion as m } from 'framer-motion';


// // const CardDeal = () => {
// //   return (
// //     <section id='clients' className={` ${styles.flexce} py-10 flex-col relative bg-gray-100`}>
// //       <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full  bottom-40'/>
// //       <div className='w-full   items-center sm:mb-16 mb-6 relative z-[1]'>
// //         <h2 className={`text-center font-poppins ${styles.heading2}`}>Projects</h2>
        
// //       </div>
// //       <div className='overflow-hidden'>
// //       <m.div 
// //         animate={0 ? { y: 0 } : { y: '100%' }}
// //         initial={{ y: '100%' }}
// //         transition={{ delay: .5, duration: .5 }}
// //       className='max-w-[1320] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-[20px]'>
// //         {feedback1.map((card) => (
// //           <Feedback1 key={card.id} {...card}/>        
// //         ))}
// //       </m.div> 
// //       </div>
// //     </section>
// //   )
// // }

// // export default CardDeal

// // import React from 'react';
// // import { feedback1 } from '../constants';
// // import styles from '../style';
// // import Feedback1 from './Feedback1';
// // import { motion as m } from 'framer-motion';
// // import { useInView } from 'react-intersection-observer';

// // const CardDeal = () => {
// //   const [ref, inView] = useInView({
// //     triggerOnce: false,
// //   });

// //   const animationVariants = {
// //     visible: { x: 0, opacity: 1 },
// //     hidden: { x: '50%', opacity: 0 },
// //   };

// //   return (
// //     <section id='clients' className={` ${styles.flexce} py-5 flex-col relative bg-gray-100`} ref={ref}>
// //       <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full  bottom-40' />
// //       <div className='w-full   items-center sm:mb-16 mb-6 relative z-[1]'>
// //         <h2 className={`text-center font-poppins ${styles.heading2}`}>Projects</h2>
// //       </div>
// //       <div className='overflow-hidden'>
// //         <m.div
// //           variants={animationVariants}
// //           animate={inView ? 'visible' : 'hidden'}
// //           initial='hidden'
// //           transition={{ delay: .5, duration: .75 }}
// //           className='max-w-[1320] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-[20px]'>
// //           {feedback1.map((card) => (
// //             <Feedback1 key={card.id} {...card} />
// //           ))}
// //         </m.div>
// //       </div>
// //     </section>
// //   );
// // };


// // import React from 'react';
// // import { feedback1 } from '../constants';
// // import styles from '../style';
// // import Feedback1 from './Feedback1';
// // import { motion } from 'framer-motion';
// // import { useInView } from 'react-intersection-observer';
// // import { mf1, mf2, mf5 } from '../assets';
// // import { useState,useEffect } from 'react';

// // const CardDeal = () => {
  
// //   const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  
// //   const handleNext = () => {
// //     setPositionIndexes((prevIndexes) => {
// //       const updatedIndexes = prevIndexes.map(
// //         (prevIndex) => (prevIndex + 1) % 5
// //       );
// //       return updatedIndexes;
// //     });
// //   };

// //   const handleBack = () => {
// //     setPositionIndexes((prevIndexes) => {
// //       const updatedIndexes = prevIndexes.map(
// //         (prevIndex) => (prevIndex + 4) % 5
// //       );

// //       return updatedIndexes;
// //     });
// //   };

// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       handleNext();
// //     }, 2000);

// //     return () => {
// //       clearInterval(intervalId);
// //     };
// //   }, [])

// //   const images = [mf1, mf2, mf5, mf1, mf5];

// //   const positions = ["center", "left1", "left", "right", "right1"];

// //   const imageVariants = {
// //     center: { x: "0%", scale: 1, zIndex: 5 },
// //     left1: { x: "-50%", scale: 0.7, zIndex: 3 },
// //     left: { x: "-90%", scale: 0.5, zIndex: 2 },
// //     right: { x: "90%", scale: 0.5, zIndex: 1 },
// //     right1: { x: "50%", scale: 0.7, zIndex: 3 },
// //   };

// //   return (
// //     <div className={`flex items-center flex-col justify-center bg-[ {url({.${images[positionIndexes[0]]}})}] bg-center bg-cover bg-fixed  h-screen`}>
// //     {images.map((image, index) => (
// //       <motion.img
// //         key={index}
// //         src={image}
// //         alt={image}
// //         className="rounded-[12px]"
// //         initial="center"
// //         animate={positions[positionIndexes[index]]}
// //         variants={imageVariants}
// //         transition={{ duration: 0.5 }}
// //         style={{ width: "40%", position: "absolute" }}
// //       />
// //     ))}
// //     <div className="flex flex-row mt-10 gap-3">
// //       <button
// //         className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
// //         onClick={handleBack}
// //       >
// //         Back
// //       </button>
// //       <button
// //         className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
// //         onClick={handleNext}
// //       >
// //         Next
// //       </button>
// //     </div>
    
    
// //     </div>
// //   );
// // };

// // export default CardDeal;
// // import React, { useState, useEffect } from 'react';
// // import { motion } from 'framer-motion';
// // import { mf1, mf2, mf5 } from '../assets';

// // const CardDeal = () => {
// //   const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

// //   const handleNext = () => {
// //     setPositionIndexes((prevIndexes) => {
// //       const updatedIndexes = prevIndexes.map(
// //         (prevIndex) => (prevIndex + 1) % 5
// //       );
// //       return updatedIndexes;
// //     });
// //   };

// //   const handleBack = () => {
// //     setPositionIndexes((prevIndexes) => {
// //       const updatedIndexes = prevIndexes.map(
// //         (prevIndex) => (prevIndex + 4) % 5
// //       );
// //       return updatedIndexes;
// //     });
// //   };

// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       handleNext();
// //     }, 2000);

// //     return () => {
// //       clearInterval(intervalId);
// //     };
// //   }, []);

// //   const images = [mf1, mf2, mf5, mf1, mf5];

// //   const positions = ['center', 'left1', 'left', 'right', 'right1'];

// //   const imageVariants = {
// //     center: { x: '0%', scale: 1, zIndex: 5 },
// //     left1: { x: '-50%', scale: 0.7, zIndex: 3 },
// //     left: { x: '-90%', scale: 0.5, zIndex: 2 },
// //     right: { x: '90%', scale: 0.5, zIndex: 1 },
// //     right1: { x: '50%', scale: 0.7, zIndex: 3 },
// //   };
// //   // <div className={` w-[100%] h-[40vh]  bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixed ${styles.flexStart}`}>
// //   //     <div className='w-[100%] h-[40vh] bg-[rgba(117,196,228,0.76)] '></div>

// //   return (
// //     <div className={`flex items-center flex-col justify-center bg-[url({./assets/${images[positionIndexes[0]]}.jpg})] bg-center bg-cover bg-fixed h-screen relative`}>
// //       {images.map((image, index) => (
// //         <motion.img
// //           key={index}
// //           src={image}
// //           alt={image}
// //           className="rounded-[12px]"
// //           initial="center"
// //           animate={positions[positionIndexes[index]]}
// //           variants={imageVariants}
// //           transition={{ duration: 0.5 }}
// //           style={{ width: '40%', position: 'absolute' }}
// //         />
// //       ))}
// //       {/* <div
// //         className="w-full h-full absolute top-0 left-0 bg-cover bg-center"
// //         style={{
// //           backgroundImage: `url(${images[positionIndexes[0]]})`,
// //         }}
// //       /> */}
// //       <div className="flex flex-row mt-10 gap-3">
// //         <button
// //           className="text-white bg-indigo-400 rounded-md py-2 px-4"
// //           onClick={handleBack}
// //         >
// //           Back
// //         </button>
// //         <button
// //           className="text-white bg-indigo-400 rounded-md py-2 px-4"
// //           onClick={handleNext}
// //         >
// //           Next
// //         </button>
// //       </div>
// //       {/* <div>
// //         <p>
// //         {`url({./assets/${images[positionIndexes[0]]}.jpg})`}
// //         </p>
// //       </div> */}
// //     </div>
// //   );
// // };

// // export default CardDeal;
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { mf1, mf2, mf5 } from '../assets';

// const CardDeal = () => {
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
//     }, 2000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   const images = [mf1, mf2, mf5, mf1, mf5];

//   const positions = ['center', 'left1', 'left', 'right', 'right1'];

//   const imageVariants = {
//     center: { x: '0%', scale: 1, zIndex: 5 },
//     left1: { x: '-50%', scale: 0.7, zIndex: 3 },
//     left: { x: '-90%', scale: 0.5, zIndex: 2 },
//     right: { x: '90%', scale: 0.5, zIndex: 1 },
//     right1: { x: '50%', scale: 0.7, zIndex: 3 },
//   };

//   return (
//     <div
//       className={`flex items-center flex-col justify-center bg-cover bg-center bg-fixed h-screen`}
//       style={{ backgroundImage: `url(${images[positionIndexes[0]]})` }}
//     >
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
//           style={{ width: '40%', position: 'absolute' }}
//         />
//       ))}
//       <div className="flex flex-row mt-10 gap-3">
//         <button
//           className="text-white bg-indigo-400 rounded-md py-2 px-4"
//           onClick={handleBack}
//         >
//           Back
//         </button>
//         <button
//           className="text-white bg-indigo-400 rounded-md py-2 px-4"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardDeal;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {z1 ,mf1, mf2, mf5, z2, z12, z18, mf3, z7} from '../assets';

const CardDeal = () => {
  const [positionIndexes, setPositionIndexes] = useState([4, 3, 2, 1, 0]);

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
  }, []);

  const images = [z1, mf2, mf5, z18, z7];

  const positions = ['center', 'left1', 'left', 'right', 'right1'];

  const imageVariants = {
    center: { x: '0%', scale: 1.2, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 3 },
    left: { x: '-90%', scale: 0.5, zIndex: 2 },
    right: { x: '90%', scale: 0.5, zIndex: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 3 },
  };

  return (
    <div
      className="w-[100%] h-[60vh]  relative flex items-center flex-col justify-center bg-cover bg-center bg-fixed rounded-[30px] "
      style={{ backgroundImage: `url(${images[positionIndexes[0]]})` }}
    >
      <div className='w-[100%] h-[80vh] relative flex items-center flex-col justify-center rounded-[30px] bg-[rgba(84,92,94,0.85)] '>
        <h1 className='z-20 font-extrabold text-[50px] text-white'>Projects</h1>
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: '45%', position: 'absolute' }}
        />
      ))}
      {/* <div className="absolute bottom-5 left-0 right-0 flex flex-row justify-center gap-3">
        <button
          className="text-white bg-indigo-400 rounded-md py-2 px-4 z-10"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white bg-indigo-400 rounded-md py-2 px-4 z-10"
          onClick={handleNext}
        >
          Next
        </button>
      </div> */}
      </div>
    </div>
  );
};

export default CardDeal;

