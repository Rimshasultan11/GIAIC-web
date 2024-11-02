import React from 'react'
import Image from 'next/image'
import p15 from '../../public/p15.jpg'
import p16 from '../../public/p16.jpg'
import p14 from '../../public/p14.jpg'
import p17 from '../../public/p17.jpg'
import p18 from '../../public/p18.jpg'
import p19 from '../../public/p19.jpg'
import p20 from '../../public/p20.jpg'
import p21 from '../../public/p21.jpg'
import p22 from '../../public/p22.jpg'
const Courses = () => {
  return (
    <div>
      <div className='w-screen'>
        <h1 className=' m-5 p-5 font-bold text-4xl text-[#39507c]'>Core Courses Sequence</h1>
          <div className='flex  gap-11 m-6'>
            <div className='w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105'>
              <Image src={p15} alt="course " width={300} className='rounded-t-2xl'/>
            <h2 className='text-lg p-5 font-bold text-gray-700  cursor-pointer'>Programming Fundamentals</h2></div>
            <div className='w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105'>
              <Image src={p14} alt="course " width={300} className='rounded-t-2xl'/>
            <h2 className='text-lg p-5 font-bold text-gray-700 text-center  cursor-pointer'>Web2 Using NextJS</h2></div>
            <div className='w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105'>
              <Image src={p16} alt="course " width={300} className='rounded-t-2xl'/>
            <h2 className='text-lg p-5 font-bold text-gray-700 text-center  cursor-pointer'>Earn as You Learn</h2>
            </div>
            
            
          </div>
      </div>
      {/* Advance Course section  */}

      <div className='w-screen'>
        <h1 className=' m-5 p-5 font-bold text-4xl text-[#39507c]'>Core Courses Sequence</h1>
          <div className='flex  gap-11 m-6'>
            <div className='w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105'>
              <Image src={p17} alt="course " width={300} className='rounded-t-2xl'/>
            <h2 className='text-lg p-5 font-bold text-gray-700  cursor-pointer'>Artificial Intelligence</h2></div>
            <div className='w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105'>
              <Image src={p18} alt="course " width={300} className='rounded-t-2xl'/>
            <h2 className='text-lg p-5 font-bold text-gray-700 text-center  cursor-pointer'>Web 3 and Metaverse</h2></div>
            <div className='w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105'>
              <Image src={p19} alt="course " width={300} className='rounded-t-2xl'/>
            <h2 className='text-lg p-5 font-bold text-gray-700 text-center  cursor-pointer'>Cloud-Native Computing</h2>
            </div>
            <div className='w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105'>
              <Image src={p20} alt="course " width={300} className='rounded-t-2xl'/>
            <h2 className='text-lg p-5 font-bold text-gray-700 text-center  cursor-pointer'>Ambient Computing and IoT</h2>
            </div>
 
          </div>
          <div className=' flex gap-11 m-7'>
            <div className='w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105'>
              <Image src={p21} alt="course " width={300} className='rounded-t-2xl'/>
            <h2 className='text-lg p-5 font-bold text-gray-700 text-center  cursor-pointer'>Genomics and Bioinformatics</h2>
            </div>
            <div className='w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105'>
              <Image src={p22} alt="course " width={300} className='rounded-t-2xl'/>
            <h2 className='text-lg p-5 font-bold text-gray-700 text-center  cursor-pointer'>Network Programmability and Automation</h2>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Courses
