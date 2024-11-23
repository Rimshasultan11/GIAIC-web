"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import p1 from '../../public/p1.png';
import p3 from '../../public/p3.jpg';
import p2 from '../../public/p2.png';

const Navebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-screen">
      {/* Navbar */}
      <div className=" sticky top-0 flex justify-between items-center bg-[#39507c] h-16 md:h-20 px-4 md:px-8 z-10 w-full">
        {/* Logo */}
        <div className=' max-sm:mt-10  md:mt-[5%] lg:mt-[5%]'>
          <Image className="m-2 md:m-4  " src={p1} alt="logo" width={80} height={80} />
        </div>

        {/* Title */}
        <p className=" hidden  lg:block text-blue-100 text-lg md:text-2xl">
          Tuition Free Education Program on Latest Technologies
        </p>
        <p className=" lg:hidden md:block text-blue-100  md:text-lg text-center">
          Tuition Free  Program 
        </p>

        {/* Menu */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="text-white text-2xl">&#9776;</button>
        </div>
        <ul
          className={`flex-col md:flex md:flex-row text-white gap-4 absolute md:static bg-[#39507c] w-full md:w-auto md:gap-5 left-0 top-16 ${
            isMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <li className="p-2 md:p-0 text-center"><a href="#">Home</a></li>
          <li className="p-2 md:p-0 text-center"><a href="#">Apply</a></li>
          <li className="p-2 md:p-0 text-center"><a href="#">Job</a></li>
          <li className="p-2 md:p-0 text-center"><a href="#">Result</a></li>
          <li className="p-2 md:p-0 text-center"><a href="#">Courses</a></li>
        </ul>
      </div>

{/* hero section */}
    


    <div style={{ position: 'relative', height: '100vh', width: '100%', zIndex: -1 }} className='sm:h-[150vh]'>
  <Image
    src={p3}
    alt="Background Image"
    layout="fill"
    objectFit="cover"
    quality={100}
    style={{ zIndex: -1, opacity: '0.3' }}
  />
  
  {/* Main Content Grid */}
  <div className="grid sm:grid-cols-1 lg:grid-cols-2 w-full p-5 h-auto">
    {/* Left Side Content */}
    <div className="w-full h-auto mt-20 text-center lg:text-left">
      <h1 className="text-6xl max-sm:text-4xl lg:text-6xl text-[#39507c] font-bold ml-0 lg:ml-5">
        Governor Sindh
      </h1>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-thin text-[#2d487a] ml-0 lg:ml-5">
        Kamran Khan Tessori
      </h2>
      <div className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#2293fc] p-2 lg:p-4">
        <p>Certified Cloud</p>
        <p>Applied Generative AI</p>
        <p>Engineer (GenEng)</p>
      </div>
      <div className="text-lg sm:text-xl lg:text-3xl p-2 m-2 font-semibold text-[#2d487a]">
        <p>Earn up to $5,000 / month</p>
        <p className="pt-3">Now admissions are open in <br/> Hyderabad</p>
        <button className="bg-[#39507c] text-white w-full sm:w-[200px] h-11 text-lg lg:text-xl mt-6 cursor-pointer rounded-lg">
          Apply Now
        </button>
      </div>
    </div>
    
    {/* Right Side Image */}
    <div className=" w-full flex justify-center">
      <Image
        src={p2}
        alt="cover"
        objectFit="contain"
        quality={100}
        className="w-full sm:w-[400px] md:w-[600px] lg:w-[800px] "
      />
    </div>
  </div>
</div>






    </div>
  

    

    
  );
};

export default Navebar;
