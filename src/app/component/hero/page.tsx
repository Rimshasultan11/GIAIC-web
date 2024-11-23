import React from 'react';
import Image from 'next/image';
import p4 from '../../public/p4.jpg';
import p5 from '../../public/p5.jpg';
import p6 from '../../public/p6.jpg';

const Hero = () => {
  return (
    <div className="w-full max-sm:mt-[50%] md:mt-[30%] lg:mt-0">
      {/* Heading Section */}
      <h1 className=" sm:text-2xl lg:text-4xl text-[#354769] font-bold text-center p-4 m-4">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
      </h1>
      
      {/* Paragraph Section */}
      <p className="p-5 sm:p-5 text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed text-justify tracking-wide">
        The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. 
        Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. 
        This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
      </p>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5 sm:p-10">
        <div className="flex justify-center">
          <Image
            src={p4}
            alt="image"
            width={400}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={p6}
            alt="image"
            width={400}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={p5}
            alt="image"
            width={400}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
