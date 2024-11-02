import React from 'react'
import Image from 'next/image'
import f1 from '../../public/f1.webp'
import t1 from '../../public/t1.webp'
import you1 from '../../public/you1.png'
import tictok from '../../public/tictok.png'
import I1 from '../../public/I1.png'
import mail from '../../public/mail.png'
const Footer = () => {
  return (
    <div>
      <div className=' flex w-screen h-100  gap-10 bg-gray-100  p-10'>
        
        <div className=' w-[400px] h-96'>
        <h1 className='text-lg pt-6 font-bold  mt-5'>Core Courses</h1>
          <p className='  text-neutral-700  pt-8 cursor-pointer text-lg'>Programing  Fundamentals</p>
          <p className=' text-neutral-700  pt-3 cursor-pointer text-lg'>Web2 Using NextJS</p>
          <p className=' text-neutral-700  pt-3 cursor-pointer text-lg'>Earn as You Learn</p>
          </div>
          <div className=' w-[400px] h-96'>
          <h1 className='text-lg pt-6 font-bold  mt-5'>Advance Courses</h1>
          <p className='  text-neutral-700  pt-3 cursor-pointer text-lg'>Web 3 and Metaverse</p>
          <p className=' text-neutral-700  pt-3 cursor-pointer text-lg'>Cloud-Native Computing </p>
          <p className=' text-neutral-700  pt-3 cursor-pointer text-lg'>Artificial Intelligence (AI) and Deep Learning</p>
          <p className='  text-neutral-700  pt-3 cursor-pointer text-lg'>Ambient Computong  And loT</p>
          <p className=' text-neutral-700  pt-3 cursor-pointer text-lg'>Genomica and Bioinformatics</p>
          <p className=' text-neutral-700  pt-3 cursor-pointer text-lg'>Network Programmablity and Automation</p>
          
          </div>
          <div className=' w-[400px] h-96'>
          <h1 className='text-lg pt-6 font-bold  mt-5'>Social Links</h1>
          <div className='flex m-5 gap-5'>
          <Image src={f1} alt='facebook'  width={40} className='cursor-pointer rounded-full'/>
          <Image src={t1} alt='tweeter'  width={40} className='cursor-pointer rounded-full'/>
          <Image src={you1} alt='youtub'  width={40} className='cursor-pointer rounded-full'/>
          <Image src={I1} alt='insta'  width={40} className='cursor-pointer rounded-full'/>
          <Image src={tictok} alt='tictok'  width={40} className='cursor-pointer rounded-full'/>
          </div>
          <p className='flex m-2 p-4 gap-2 text-[#395b88] Class underline font-bold'>
          <Image  src={mail} alt='email' width={40}  className='cursor-pointer rounded-full'/>
          <a href="#" target='blank'>education@goversindh.com</a></p>
          </div>
      </div>
    </div>
  )
}

export default Footer
