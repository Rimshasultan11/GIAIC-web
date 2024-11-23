import React from 'react';
import Image from 'next/image';
import p15 from '../../public/p15.jpg';
import p16 from '../../public/p16.jpg';
import p14 from '../../public/p14.jpg';
import p17 from '../../public/p17.jpg';
import p18 from '../../public/p18.jpg';
import p19 from '../../public/p19.jpg';
import p20 from '../../public/p20.jpg';
import p21 from '../../public/p21.jpg';
import p22 from '../../public/p22.jpg';

const Courses = () => {
  return (
    <div>
      <div className="w-screen">
        <h1 className="m-5 p-5 font-bold text-xl text-[#39507c]  lg:text-4xl">
          Core Courses Sequence
        </h1>
        <div className="flex flex-col md:flex-row gap-6 m-6 justify-center  lg:justify-start">
          {/* Card 1 */}
          <div className="w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105 transition-transform">
            <Image src={p15} alt="course" width={300} height={200} className="rounded-t-2xl" />
            <h2 className="text-lg p-5 font-bold text-gray-700 text-center cursor-pointer">
              Programming Fundamentals
            </h2>
          </div>
          {/* Card 2 */}
          <div className="w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105 transition-transform">
            <Image src={p14} alt="course" width={300} height={200} className="rounded-t-2xl" />
            <h2 className="text-lg p-5 font-bold text-gray-700 text-center cursor-pointer">
              Web2 Using NextJS
            </h2>
          </div>
          {/* Card 3 */}
          <div className="w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105 transition-transform">
            <Image src={p16} alt="course" width={300} height={200} className="rounded-t-2xl" />
            <h2 className="text-lg p-5 font-bold text-gray-700 text-center cursor-pointer">
              Earn as You Learn
            </h2>
          </div>
        </div>
      </div>

      {/* Advanced Course Section */}
      <div className="w-screen">
        <h1 className="m-5 p-5 font-bold text-xl text-[#39507c]  lg:text-4xl">
          Advanced Courses
        </h1>
        <div className="flex flex-wrap justify-center lg:justify-start  gap-6 m-6">
          {[
            { img: p17, title: 'Artificial Intelligence' },
            { img: p18, title: 'Web 3 and Metaverse' },
            { img: p19, title: 'Cloud-Native Computing' },
            { img: p20, title: 'Ambient Computing and IoT' },
            { img: p21, title: 'Genomics and Bioinformatics' },
            { img: p22, title: 'Network Programmability and Automation' },
          ].map((course, idx) => (
            <div
              key={idx}
              className="w-[300px] h-[280px] bg-white rounded-md rounded-t-2xl shadow-gray-400 shadow-md hover:scale-105 transition-transform"
            >
              <Image
                src={course.img}
                alt={course.title}
                width={300}
                height={200}
                className="rounded-t-2xl"
              />
              <h2 className="text-lg p-5 font-bold text-gray-700 text-center cursor-pointer">
                {course.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
