import React from "react";
import { visionary,jonly,first1,secondone,forward} from "../assets";
import RegistrationFormTwo from "./RegistrationFormTwo";


const SignHero = () => {
  return (
   
    <div className="flex  ">  
      <div className="mt-[0px] md:mt-[-28px] ml-[60px] mb-[80px]">
      <img src={jonly} className="w-[275px] md:w-[194px] h-[550px] md:h[270px] relative  " />
       
      </div>
    <div className="hidden  md:block   ">
      <img src={visionary} alt="visionary" className="w-[900px] h-[px] absolute ml-[-200px] mt-[-80px]" />
    </div>
    <div className="w-[470px] h-[400px] bg-zinc-300 bg-opacity-30 rounded-[57px] relative hidden  md:block relative ml-[300px] mt-2" >
    </div>
    <div className=" absolute mt-[120] md:mt-[] ml-1 md:ml-[600px] ">
    
    <div className="mt-[90px] md:mt-[40px] md:ml-[30px] ml-[13px]">
     <RegistrationFormTwo/>
     </div>
   
       
     
     
    </div>
   
       
    </div>

  );
};

export default SignHero;