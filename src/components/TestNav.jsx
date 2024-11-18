import React from "react";
import {logo} from "../assets";
import { Link } from "react-router-dom";


const TestNav = () => {
  

  return (
    <nav className="  flex justify-between  items-center navbar md:pt-[50px] pt-8">
  <div className="pl-8 md:pl-0">
  <img src={logo} alt="hoobank" className=" md:h-[25px]  h-[28.24px]" />
  </div>
  <Link to='/Map'>
  <div className="pr-[35px]  text-white hover:underline  md:font-medium md:text-[18.83px] text-[16px]  font-['Magical Stylish Sans Serif Demo']">Home</div>
  </Link> 
</nav>
  );
};

export default TestNav;
