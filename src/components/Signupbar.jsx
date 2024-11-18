import { useState } from "react";
import React from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Signupbar = () => {
  

  return (
    <nav className="md:pl-20 pl-12 w-full flex py-3.5 md:justify-between  items-center navbar pt-[] md:pt-[50px]">
  <img src={logo} alt="hoobank" className="md:w-[124px] md:h-[25px] w-[74.53px] h-[28.24px]" />
 
</nav>
  );
};

export default Signupbar;
