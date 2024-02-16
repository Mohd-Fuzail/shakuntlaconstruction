import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter}  ${styles.padding} my-1 sm:flex-row flex-col  bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixe bg-red-200 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col '>
        <h2 className={`text-white ${styles.heading2}`}>Let's try our service now!</h2>
        <p className={`text-white ${styles.paragraph} max-w-[470px] mt-5`}>
        When It Comes To Reliability, We Are The One You Need!.
        </p>
      </div>
     
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
      <a href={`#footers`}>
      <button type='button' className={`py-4 px-6 bg-gradient-to-r from-yellow-500 to-orange-600 font-poppins font-medium text-[18px] text-white outline-none mt-10  rounded-[10px]`}>
         Get Started
    </button>
    </a>
      </div>
    </section>
  )
}

export default CTA
{/* <div className={` w-[100%] h-[100vh]  bg-[url('./assets/mff1.jpg')] bg-center bg-cover bg-fixed ${styles.flexStart}`}>
<div className='w-[100%] h-[100vh] Sbg-[rgba(10,10,10,0.43)] '> */}