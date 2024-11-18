import React from "react";
import styles from "../style";
import { visionary,jonly,forward } from "../assets";
import RegistrationForm from "./RegisterationForm";
import { first1,secondone } from "../assets";


const SignHero = () => {
  return (
    
     <div className="flex  ">  
      <div className="mt-[0px] md:mt-[-28px] ml-[60px] mb-[80px]">
      <img src={jonly} className="w-[275px] md:w-[194px] h-[550px] md:h[270px] relative  " />
       
      </div>
    <div className="hidden  md:block   ">
      <img src={visionary} alt="visionary" className="w-[900px] h-[px] absolute ml-[-200px] mt-[-80px]" />
    </div>
   
    <div className=" absolute mt-[120] md:mt-[] ml-1 md:ml-[600px] ">
    
    <div className="mt-[20px] md:mt-[40px] md:ml-[30px] ml-[48px]">
      <RegistrationForm />
      </div>
    
     
     
    </div>
  
    </div>

  
  );
};

export default SignHero;