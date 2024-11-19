import React from 'react';
import Image from 'next/image';
import logo from "../../asserts/banner.png";

const Banner = () => {
  return (
    <div className="relative md:h-[90vh] w-full overflow-hidden ">
      {/* Background Image */}
      <div className="absolute  w-full h-full md:block hidden"> {/* Adjust top to move up */}
        <Image
          src={logo}
          alt="Dog Banner"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>

      <div className=" md:hidden m-5 mt-40 "> {/* Adjust top to move up */}
        <Image
          src={logo}
          alt="Dog Banner"
          className="object-right-top rounded-xl "
        />
      </div>




      <div className="md:block hidden md:absolute inset-0 bg-black opacity-30"></div> 
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-start left-[8%] md:top-[20%] -top-[18%] z-10">
        <h1 className="text-white font-inter font-bold  md:text-fluid-2xl text-[30px]  md:leading-normal leading-[1.5]">
          YOUR BEST <br /> FRIEND DESERVES <br /> THEIR BEST DAY
        </h1>
      </div>
    </div>
  );
};

export default Banner;
