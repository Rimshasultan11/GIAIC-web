// components/AutoSlider.js

import Image from "next/image";
import p9 from '../../public/p9.jpg'
import p10 from '../../public/p10.jpg'
import p11 from '../../public/p11.jpg'
import p12 from '../../public/p12.jpg'
import p7 from '../../public/p7.jpg'
import p8 from '../../public/p8.jpg'
const Slider = () => {
  return (
    <div className="overflow-hidden ">
      <div className="flex space-x-4 animate-scroll">
        <Image
          src={p9}
          width={700}
          height={200}
          alt="Image 1"
          className="rounded-lg"
        />
        <Image
          src={p10}
          width={700}
          height={200}
          alt="Image 2"
          className="rounded-lg "
        />
        <Image
          src={p11}
          width={700}
          height={200}
          alt="Image 3"
          className="rounded-lg "
        />
        <Image
          src={p12}
          width={700}
          height={200}
          alt="Image 3"
          className="rounded-lg"
        />
        <Image
          src={p7}
          width={700}
          height={200}
          alt="Image 3"
          className="rounded-lg"
        />
        <Image
          src={p8}
          width={700}
          height={200}
          alt="Image 3"
          className="rounded-lg w-screen"
        />
        
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Slider;
