import React from "react";
import {logo} from "../assets";


const TestNav = () => {
  

  return (
    <nav className="md:pl-20 pl-12 w-full flex py-3.5 md:justify-between  items-center navbar pt-[] md:pt-[50px]">
  <img src={logo} alt="hoobank" className="md:w-[124px] md:h-[25px] w-[74.53px] h-[28.24px]" />
  <a href="#" className="pl-28 pr-0 md:pr-[150px] text-white hover:underline md:text-sm md:font-medium text-[18.83px] font-normal font-['Magical Stylish Sans Serif Demo']">Username</a>
</nav>
  );
};

export default TestNav;
