import Image from 'next/image';
import React from 'react';
import banner from '../../asserts/fb1.png'

const FriendBanner = () => {
    return (
<section  className="relative  bg-white  w-full overflow-hidden  xl:mt-[113px] lg:mt-[83px] md:mt-[97px] ">
    <div  className=" bg-white">
        <Image  className="w-full h-[60vh]  object-cover " alt="Dog Image" src={banner}  />
    </div>

    {/* <div  className="absolute  hidden bg-gradient-to-r md:block"></div> */}

    <div  className="absolute inset-0  bg-black opacity-30"></div>


        <div  className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left absolute top-1/2 left-[13%]">
            <h2  className="text-white xl:text-[72px] text-fluid-2xl-2 font-bold">Your New Best <br /> Friends...</h2>
        </div>
    </section>

    );
};

export default FriendBanner;