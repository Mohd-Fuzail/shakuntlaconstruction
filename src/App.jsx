// // import React from 'react'
// // import { 
// //   Billing, 
// //   Business, 
// //   CardDeal, 
// //   Clients, 
// //   CTA, 
// //   Footer, 
// //   Hero, 
// //   Navbar, 
// //   Stats, 
// //   Testimonials 
// // } from './components'
// // import styles from './style'

// // const App = () => {
// //   return (
   
// //     <div className='bg-primary w-full overflow-hidden'>
// //       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
// //         <div className={`${styles.boxWidth}`}>
// //           <Navbar/>
// //         </div>
// //       </div>
// //       <div className={`bg-primary ${styles.flexStart}`}>
// //         <div className={`${styles.boxWidth}`}>
// //           <Hero/>      
// //         </div>
// //       </div>
// //       <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
// //         <div className={`${styles.boxWidth}`}>
// //           <Stats/>
// //           <Business/>
// //           <Billing/>
// //           <CardDeal/>
// //           <Testimonials/>
// //           <Clients/>
// //           <CTA/>
// //           <Footer/>     
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default App
// import React from 'react';
// import { 
//   Billing, 
//   Business, 
//   CardDeal, 
//   Clients, 
//   CTA, 
//   Footer, 
//   Hero, 
//   Navbar, 
//   Stats, 
//   Testimonials 
// } from './components';
// import Page1 from './components/Page1';
// import styles from './style';
// import { mf } from './assets';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <div className='bg-white w-full overflow-hidden'>
//       <div className={` ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Navbar/>
//         </div>
//       </div>
//       {/* <div className={`bg-[url('./assets/mff1.jpg')] bg-[length:1350px_750px] ${styles.flexStart}`}> */}
//       <div className={` w-[100%] h-[100vh]  bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixed ${styles.flexStart}`}>
//         <div className='w-[100%] h-[100vh] bg-[rgba(117,196,228,0.76)] '>
//         <div className={`${styles.boxWidth}`}>
//           <Hero/>      
//         </div>
//         </div>
//       </div>
//       <div className={`bg-blue-200 ${styles.paddingX} ${styles.flexStart}`}>
      
//         <div className={`${styles.boxWidth}`}>
//         <Testimonials/>
//         </div>
//         </div>
//        <div >
//         <Billing/>
//         <Stats/>
//        </div>
//    <div className={`bg-blue-200 ${styles.paddingX} ${styles.flexStart}`}>  
//       <div className={`${styles.boxWidth}`}>
//           <CardDeal/>
//           </div>

// </div>          
//          <div className='bg-blue-200'>
//          <Clients/>
//          </div>
//          <div className={`bg-blue-200 ${styles.paddingX} ${styles.flexStart}`}>  
//       <div className={`${styles.boxWidth}`}>
//           <CTA/>
//           </div>
//       </div>
//       <div>
//           <Footer/>     
//           </div>
//     </div>
//   );
// };

// export default App;
// {/* <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter> */}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Test, Testimonials } from './components';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

import Page4 from './components/Page4';
import styles from './style';
import { mf } from './assets';
import Page5 from './components/Page5';

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-white w-full overflow-hidden'>
        <div className={` ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/business" element={<Business />} />
          <Route path="/card-deal" element={<CardDeal />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page4" element={<Page4 />} />
          {/* Add routes for other components */}
        </Routes>
       
      </div>
    </BrowserRouter>
  );
};

const Home = () => (
  <>
    <div className={` w-[100%] h-[100vh]  bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixed ${styles.flexStart}`}>
      <div className='w-[100%] h-[100vh] bg-[rgba(117,196,228,0.76)] '>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
    <div>
      <Billing />
      <Stats />
    </div>
    <div className={`bg-blue-200  pt-20 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <CardDeal />
      </div>
    </div>
    <div className={`bg-blue-200 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials />
      </div>
    </div>
    <div className={`bg-blue-200 pb-20   ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Test/>
      </div>
    </div>
    
   
    
    <div className='bg-blue-200'>
      <Clients />
    </div>
    <div className={`bg-blue-200 py-10 ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <CTA />
       
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </>
);

export default App;
