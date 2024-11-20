import React from "react";
import img1 from "../../../asserts/fp1.png";
import img2 from "../../../asserts/fp2.png";
import img3 from "../../../asserts/fp3.png";
import img4 from "../../../asserts/fp4.png";
import img5 from "../../../asserts/fp5.png";
import img6 from "../../../asserts/fp6.png";
import img7 from "../../../asserts/fp7.png";
import img8 from "../../../asserts/fp8.png";
import img9 from "../../../asserts/fp9.png";
import checkMark from "../../../asserts/checkMark.svg";
import Image from "next/image";
import Link from "next/link";

const DonateSuccess = (params) => {
  const { setOpen, id } = params;
  const shelters = [
    { id: 1, name: "ABC Shelter", image: img1 },
    { id: 2, name: "ABC Shelter", image: img2 },
    { id: 3, name: "ABC Shelter", image: img3 },
    { id: 4, name: "ABC Shelter", image: img4 },
    { id: 5, name: "ABC Shelter", image: img5 },
    { id: 6, name: "ABC Shelter", image: img6 },
    { id: 7, name: "ABC Shelter", image: img7 },
    { id: 8, name: "ABC Shelter", image: img8 },
    { id: 9, name: "ABC Shelter", image: img9 },
  ];
  const selectedShelter = shelters.find(
    (shelter) => shelter.id === parseInt(params.id)
  );

  return (
    <div className="bg-white/30 w-[60vw] h-[90vh]  backdrop-blur-xl rounded-[50px] border-2 border-white  flex flex-col justify-center">
      <button
        className="absolute right-10 top-10 font-bold text-2xl text-white"
        onClick={() => setOpen(false)}
      >
        X
      </button>

      <div className="md:w-1/4 w-1/2 mx-auto">
        <Image
          alt={selectedShelter.name}
          src={selectedShelter.image}
          width={0}
          height={0}
          className="object-cover  m-4 px-3 aspect-square rounded-3xl  overflow-hidden mb-4 md:mb-0 md:mr-6 flex justify-center items-center "
        />
      </div>
      <div className="flex justify-center mt-3">
      <Image 
      alt="checkmark"
      src={checkMark}
      width={0}
      height={0}
      />
      </div>
  
      <h1 className="text-[30px] font-semibold text-white">Donation Successful</h1>
      <p className="text-[16px] text-white">Thank You For Your Donation</p>

      <div className="flex justify-center my-5 ">
        <Link href={"/fearured-pups"} onClick={() => setOpen(false)}>
        
      <button
              
              className="md:mt-0 mt-3  text-white no-underline  bg-[#F88D58] hover:bg-black 
               md:px-32 px-10 py-3 lg:text-fluid-button text-[18px] flex  
                 items-center md:gap-[16px] gap-[4px] rounded-lg  flex-shrink-0  "
            >
              Continue
            </button>
        </Link>
      </div>
 

    </div>
  );
};

export default DonateSuccess;
