import React from 'react';
import Friend from './Friend';
import HowDoYouPlay from '../HomePage/HowDoYouPlay';
import Pagination from './Pagination';

const Friends = () => {
    return (
        <div className='bg-[#FFFAF5]'>
            <h1 className='  text-center font-bold my-[50px] xl:text-[96px] text-fluid-2xl-3 text-[#302F51]' >FRIENDS NEAR YOU</h1>

                <Friend/>
                <Friend/>
                <Friend/>


                <div className='pt-[50px] '>
                <HowDoYouPlay/>
                </div>



{/* <div  className="h-[42px] flex gap-[15px]  text-center justify-center">
  <div  className="w-[38px] h-[42px] px-[3px] py-[5px] origin-top-left rotate-180 flex-col justify-center items-center inline-flex">
    <div  className="self-stretch grow shrink basis-0 justify-center items-center inline-flex">
      <div  className="w-8 h-8 relative">
      </div>
    </div>
  </div>
  <div  className="justify-start items-start flex">
    <div  className="w-[38px] h-[42px] p-2.5 bg-[#f88d58] border flex-col justify-center items-center gap-2.5 inline-flex">
      <div  className="text-center text-white text-lg font-bold font-['Poppins'] leading-loose">1</div>
    </div>
    <div  className="w-[38px] h-[42px] p-2.5 border border-[#fef5ea] flex-col justify-center items-center gap-2.5 inline-flex">
      <div  className="text-center text-[#302f51] text-lg font-bold font-['Poppins'] leading-loose">2</div>
    </div>
    <div  className="w-[38px] h-[42px] p-2.5 border border-[#fef5ea] flex-col justify-center items-center gap-2.5 inline-flex">
      <div  className="text-center text-[#302f51] text-lg font-bold font-['Poppins'] leading-loose">3</div>
    </div>
    <div  className="w-[38px] h-[42px] p-2.5 flex-col justify-center items-center gap-2.5 inline-flex">
      <div  className="text-center text-[#302f51] text-lg font-bold font-['Poppins'] leading-normal">...</div>
    </div>
    <div  className="w-[38px] h-[42px] p-2.5 border border-[#fef5ea] flex-col justify-center items-center gap-2.5 inline-flex">
      <div  className="text-center text-[#302f51] text-lg font-bold font-['Poppins'] leading-loose">10</div>
    </div>
  </div>
  <div  className="w-[38px] h-[42px] px-[3px] py-[5px] flex-col justify-center items-center inline-flex">
    <div  className="self-stretch grow shrink basis-0 justify-center items-center inline-flex">
      <div  className="w-8 h-8 relative">
      </div>
    </div>
  </div>
</div> */}

<div className="flex flex-col items-center justify-center  bg-gray-50 py-[100px]">
      <Pagination totalPages={10} initialPage={1} />
    </div>



    <div className="text-[#302F51] text-center py-8 px-4 mb-[100px]">
      <h2 className="text-[40px]  font-semibold mb-4 text-gray-800">Disclaimer</h2>
      <p className="leading-relaxed text-[22px] text-justify md:mx-[150px] mx-[24px]">
        Woof Spot is designed to help dog owners connect with others in their community for activities like walks, hikes, and playdates.
        While we encourage positive interactions, it is important to use caution when meeting new people and dogs. Woof Spot does not vet users
        or guarantee the safety, behavior, or reliability of any individuals or their pets. By using our platform, you agree that Woof Spot is not
        responsible or liable for any negative experiences, injuries, or disputes that may arise from interactions between users. Always prioritize
        safety and good judgment when arranging meetups.
      </p>
    </div>

        </div>
    );
};

export default Friends;