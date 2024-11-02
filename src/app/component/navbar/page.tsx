import React from 'react'
import Image from 'next/image'
import p1 from '../../public/p1.png'
import p3 from '../../public/p3.jpg'
import p2 from '../../public/p2.png'

const Navebar = () => {
  return (
    <div className='w-screen'>
      <div className=' sticky top-0 flex justify-between bg-[#39507c] h-20 item-center w-screen'>
        <div><Image  className='m-4 mt-5' src={p1} alt='logo' width={100}/></div>
        <p className=' text-blue-100 text-2xl m-5'>Tuition Free Education Program on Latest Technologies</p>
        <ul className='flex text-white gap-5 m-5 '>
        <li><a href="#">Home</a></li>
        <li><a href="#">Apply</a></li>
        <li><a href="#">Job</a></li>
        <li><a href="#">Result</a></li>
        <li><a href="#">Courses</a></li>
        </ul>
      </div>
      <div style={{ position: 'relative', height: '125vh', width: '100%' , zIndex: -1}}>
      <Image
        src={p3}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        
        style={{ zIndex: -1  , opacity:'0.3'}}
      />
    <div className='p-5 flex gap-[120]'>
        <div  className=' w-[600] h-[600] mt-20'>
            <h1 className=' text-6xl text-[#39507c]  font-bold ml-5'>Governor Sindh</h1>
           <h2 className='text-5xl ml-5 font-thin text-[#2d487a] '> Kamran Khan Tessori</h2>
           <div className=' text-4xl  p-4 font-extrabold text-[#2293fc]'>
           <p>Certified Cloud </p>
            <p>Applied Generative AI</p>
           <p>Engineer (GenEng)</p>
        </div>
        <div className='text-3xl p-2 m-2 font-semibold  text-[#2d487a] '>
          <p>Earn up to $5,000 / month</p>
          <p className='pt-4'>Now admissions are open in Hyderabad</p>
        <button className='bg-[#39507c] text-white w-[200]  h-11 text-xl mt-10 cursor-pointer  rounded-lg'>Apply Now</button>
    
        </div>
        </div>
        {/* left side image */}
        <div  className=' w-[600] h-[600] pl-[180] ml-[100]'>
         <Image  src={p2}  alt='cover' objectFit="cover"
        quality={100}  style={{ width:"800px", height:"120vh"}}/>
        </div>
    </div>
    
    
    </div>
    </div>
  )
}

export default Navebar
