import React , {useState} from 'react';
import styles from '../style';
import { logo } from '../assets';

import { footerLinks, socialMedia } from '../constants';
import axios from 'axios';



const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Send data to Firebase Realtime Database
      await axios.post('https://mfsg-7c373-default-rtdb.firebaseio.com/userDataRecords.json', formData);

      // Reset form data
      setFormData({ name: '', email: '', message: '' });

      // Show success alert
      alert('Form submitted successfully!');
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} px-10 flex-col md:flex-row bg-blue-400`}>
      {/* Left Column */}
      <div className='md:w-1/3 flex flex-col mb-8 mr-10'>
        {/* <img src={logo} alt='logo' className='w-[266px] h-[172px] object-contain' /> */}
        <div className=' my-0 ml-0 py-6  h-[75px] '><p className='  text-transparent  bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 font-extrabold text-4xl'>Shakuntla Group</p></div>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      {/* Middle Column - Links */}
      <div className='md:w-1/3 flex flex-col justify-start mt-10'>
        {footerLinks.map((link) => (
          <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-black'>
              {link.title}
            </h4>
            <ul className='list-none mt-4'>
              {link.links.map((item, index) => (
                <li
                  key={item.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-black hover:text-white cursor-pointer ${
                    index !== link.links.length - 1 ? 'mb-4' : 'mb-0'
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right Column - Contact Form */}
      {/* contact part */}
      <div className='md:w-1/3 w-full flex flex-col justify-items-center'>
      <section id='footers' className='w-full flex flex-col mb-4 bg-blue-500 rounded-lg py-10 px-8'>
          <h1 className='text-white mb-5 text-[30px] font-bold'>Contact us</h1>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            className='mb-4 py-2 px-3 rounded-lg'
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='mb-4 py-2 px-3 rounded-lg'
          />
          <textarea
            name='message'
            placeholder='Message'
            rows='4'
            value={formData.message}
            onChange={handleChange}
            className='mb-4 py-2 px-3 rounded-lg'
          ></textarea>
          <button
            type='button'
            onClick={handleSubmit}
            className={`py-1 bg-gradient-to-r from-purple-800 to-blue-700 font-poppins font-medium text-[18px] text-white outline-none mt-5 rounded-[10px]`}
          >
            Submit
          </button>
        </section>
       

        {/* Media Links and Copyright */}
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
          <div className='flex flex-row md:mt-0 mt-6'>
            {socialMedia.map((social, index) => (
              <img
                src={social.icon}
                key={social.id}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
                }`}
              />
            ))}
          </div>
          {/* <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
            2023 HooBank. All Rights Reserved.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
