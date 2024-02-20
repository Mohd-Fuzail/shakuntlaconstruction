// import React from 'react'
// import { apple, bill, google } from '../assets'
// import styles, { layout } from '../style'

// const Billing = () => {
//   return (
//     <section id='product' className={layout.sectionReverse}>
//       <div className={layout.sectionImgReverse}>
//         <img
//           src={bill}
//           alt='billing'
//           className='w-[100%] h-[100%] relative z-[5]'
//         />
//         <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
//         <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
//       </div>
//       <div className={layout.sectionInfo}>
//         <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Elit enim sed massa etiam.
//           Mauris eu adipiscing ultrices ametodio aenean neque.
//           Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
//         </p>
//         <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
//           <img
//             src={apple}
//             alt='app-store'
//             className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
//           />
//           <img
//             src={google}
//             alt='google-play'
//             className='w-[128px] h-[42px] object-contain cursor-pointer'
//           />
//         </div>
//       </div>  
//     </section>
//   )
// }

// export default Billing
// import React from 'react'
// import { apple, bill, google } from '../assets'
// import styles, { layout } from '../style'


// const Billing = () => {
//   return (
//     <section id='product' className={` bg-gray-100 bg-center  ${layout.sectionReverse}`}>
//       <div className={`pl-10 ${layout.sectionInfo}`}>
//         <h2 className={styles.heading2}>About Us</h2>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         With a rich legacy spanning two decades, our firm has emerged as 
//         a beacon of excellence in the electrical services sector. We attribute
//          our success to a dedicated team of 10-15 skilled professionals and
//           30-45 laborers. Fueled by our commitment to innovation and client 
//           satisfaction, we continue to navigate the ever-evolving landscape 
//           of electrical services, ensuring precision, safety, and adherence 
//           to industry standards. Our vision for the future revolves around
//            sustaining excellence and reliability, illuminating the path for
//             continued success in the years to come.
//         </p>
//         <button type='button' className={`py-4 px-6 bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-poppins font-medium text-[18px] text-white outline-none mt-10  rounded-[10px]`}>
//           Know More
//     </button>
        
//       </div>  
//       <div className={`bg-[url('./assets/mmff1.jpg')] rounded-lg bg-center bg-cover bg-fixed ${layout.sectionImgReverse}`}>
        
       
//       </div>
      
//     </section>
//   )
// }

// export default Billing//https://websitedemos.net/electrician-02/
//https://websitedemos.net/electrician-02/
//https://websitedemos.net/electrician-02/
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
  return (
    <section id='product' className={`bg-gray-100 bg-center ${layout.sectionReverse}`}>
      <div className={`pl-10 ${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>About Us</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Welcome to Elec Tricks Engineers, a pioneering force in the realm of
       Power Sector and Substation Testing Instruments. Established with unwavering
        commitment in May 2022, Elec Tricks Engineers boasts an impressive journey marked
         by unparalleled expertise in the domain.
         Our corporate headquarters, strategically located at ADDRESS,
          serves as the nerve center for our swift and efficient service 
          delivery to a diverse clientele. We extend our services to Central 
          and State Generation, Transmission and Distribution Companies, Power Utilities,
           OEMs, EPCs, Railways, System Integrators, Testing Laboratories, and individual Testers.
        </p>

        {/* Use Link to navigate to the "/page1" route */}
        <Link to="/page1">
          <button
            type='button'
            className={`py-4 px-6 bg-gradient-to-r from-fuchsia-500 to-cyan-500 font-poppins font-medium text-[18px] text-white outline-none mt-10 rounded-[10px]`}
          >
            Know More
          </button>
        </Link>
      </div>
      <div className={`bg-[url('./assets/mmff1.jpg')] rounded-lg bg-center bg-cover bg-fixed ${layout.sectionImgReverse}`}>
      </div>
    </section>
  );
};

export default Billing;
