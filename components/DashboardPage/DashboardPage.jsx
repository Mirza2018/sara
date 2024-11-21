"use client";
import React, { useState } from "react";
import DashboardNav from "./DashboardNav";
import SearchField from "./SearchField";
import Foods from "./Food/Foods";

const DashboardPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" xl:mt-[130px] lg:mt-[113px] md:mt-[100px] mt-[80px]">
      <div className="flex ">
            <DashboardNav/>
            <div className="flex-1">
            <SearchField/>  
            <Foods/>
            </div>
      </div>
      <div>
      
      </div>
    </div>
  );
};

export default DashboardPage;
