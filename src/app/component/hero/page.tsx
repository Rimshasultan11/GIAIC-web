import React from 'react'
import Image from 'next/image'
import p4 from '../../public/p4.jpg'
import p5 from '../../public/p5.jpg'
import p6 from '../../public/p6.jpg'


const Hero = () => {
  return (
    <div>
    
      <div className='w-screen'>
     <h1 className=' text-3xl text-[#354769]  font-bold  text-center p-4  m-4'>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
      <p className='justify-center p-10 m-2 text-[20px] tracking-wide'>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
      <div className='flex gap-5 m-10'>
        <Image src={p4} alt=" image" width={400}  height={300} className='rounded-xl shadow-gray-700 shadow-2xl'/>
        <Image src={p6} alt='image' width={400} className='rounded-xl  shadow-gray-700 shadow-2xl'/>
        <Image src={p5} alt='image' width={400} className='rounded-xl  shadow-gray-700 shadow-2xl'/>
      </div>
  
      </div>
    </div>
  )
}

export default Hero
