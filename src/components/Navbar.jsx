import React, { useState } from 'react'
import { close, logo, menu,mf } from '../assets'
import { navLinks } from '../constants'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='bg-white  overflow-hidden w-full flex  justify-between items-center  navbar'>
      {/* <img src={logo} alt='hoobank' className='w-[124px] h-[32px]'/> */}
      <div className=' my-0 ml-0 py-6  h-[75px] '><p className='mx-4  text-transparent  bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-extrabold text-4xl'>Shakuntla Group</p></div>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 my-6'>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-blue-600 hover:text-blue-500 mr-10`}><Link to="/">Home</Link></li>
        {navLinks.map((nav, i) => (
          <li 
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${i === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-blue-600 hover:text-blue-500 mr-10`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
             
            </a>
          </li>        
        ))}
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-blue-600 hover:text-blue-500 mr-10`}> <Link to="/page1">About Us</Link></li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-blue-600 hover:text-blue-500 mr-10`}> <Link to="/page2">Service</Link></li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-blue-600 hover:text-blue-500 mr-10`}> <Link to="/page5">Gallery</Link></li>


      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center z-20'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] mr-5 object-contain'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-blue-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end pl-6 items-center flex-1'>
          <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 mb-4`}> <Link to="/">Home</Link></li>
            {navLinks.map((nav, i) => (
              <li 
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-center text-white mr-10`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>        
            ))}
       <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 mb-4`}> <Link to="/page1">About Us</Link></li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 mb-4`}> <Link to="/page2">Service</Link></li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 mb-4`}> <Link to="/page5">Gallery</Link></li>


          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
