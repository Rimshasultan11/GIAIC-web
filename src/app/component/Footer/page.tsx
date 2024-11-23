import React from 'react';
import Image from 'next/image';
import f1 from '../../public/f1.webp';
import t1 from '../../public/t1.webp';
import you1 from '../../public/you1.png';
import tictok from '../../public/tictok.png';
import I1 from '../../public/I1.png';
import mail from '../../public/mail.png';

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="grid sm:grid-cols-1  lg:grid-cols-3 justify-between w-full p-10 gap-10">
        {/* Core Courses Section */}
        <div className="w-full sm:w-[300px] lg:w-[400px] h-auto">
          <h1 className="text-lg font-bold mt-5">Core Courses</h1>
          <p className="text-neutral-700 pt-3 cursor-pointer text-lg">Programming Fundamentals</p>
          <p className="text-neutral-700 pt-3 cursor-pointer text-lg">Web2 Using NextJS</p>
          <p className="text-neutral-700 pt-3 cursor-pointer text-lg">Earn as You Learn</p>
        </div>

        {/* Advanced Courses Section */}
        <div className="w-full sm:w-[300px] lg:w-[400px] h-auto">
          <h1 className="text-lg font-bold mt-5">Advanced Courses</h1>
          <p className="text-neutral-700 pt-3 cursor-pointer text-lg">Web 3 and Metaverse</p>
          <p className="text-neutral-700 pt-3 cursor-pointer text-lg">Cloud-Native Computing</p>
          <p className="text-neutral-700 pt-3 cursor-pointer text-lg">Artificial Intelligence (AI) and Deep Learning</p>
          <p className="text-neutral-700 pt-3 cursor-pointer text-lg">Ambient Computing and IoT</p>
          <p className="text-neutral-700 pt-3 cursor-pointer text-lg">Genomics and Bioinformatics</p>
          <p className="text-neutral-700 pt-3 cursor-pointer text-lg">Network Programmability and Automation</p>
        </div>

        {/* Social Links Section */}
        <div className="w-full sm:w-[300px] lg:w-[400px] h-auto">
          <h1 className="text-lg font-bold mt-5">Social Links</h1>
          <div className="flex flex-wrap gap-5 mt-5">
            <Image src={f1} alt="facebook" width={40} className="cursor-pointer rounded-full" />
            <Image src={t1} alt="twitter" width={40} className="cursor-pointer rounded-full" />
            <Image src={you1} alt="youtube" width={40} className="cursor-pointer rounded-full" />
            <Image src={I1} alt="instagram" width={40} className="cursor-pointer rounded-full" />
            <Image src={tictok} alt="tiktok" width={40} className="cursor-pointer rounded-full" />
          </div>
          <p className="flex items-center gap-2 text-[#395b88] underline font-bold mt-4">
            <Image src={mail} alt="email" width={40} className="cursor-pointer rounded-full" />
            <a href="#" target="blank">education@goversindh.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
