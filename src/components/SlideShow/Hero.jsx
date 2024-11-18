import React from "react";
import styles from "../../style";
import { discount, robot } from "../../assets";
import { star,jonly} from "../../assets";
import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <>
    <section id="home" className='flex'>

      <div>
         
  <div className="relative md:ml-[45px] ml-[80px]  md:mt-[110px] mt-[74px] ">
    
    <p className=" gradient-text md:text-[57.36px] text-[64.36px] leading-[80px] font-bold">
    practice <br className="md:hidden"/> leads<br className="hidden md:block"/> to <br className="md:hidden"/> mastery
    </p>
   
  </div>
 
<div className=" relative ml-[15px] mt-[20px] md:mt-[30px]">
        <p className='text-white text-[20px] md:w-[720px]'>
        We created a stress-free strategy to get you ready for the exams and courses without adding extra pressure.
        </p>
        </div>


        <div className=" relative mt-[20px] md:mt-[30px] ml-[60px]">
      <div className="mt-[20px] md:mt-[0px] ml-[40px] md:ml-0 ">
        <Link to="/Otp">
           <button className="button1 text-white px-4 py-2 mr-3 hover:bg-emerald-950"><div className="signup-layout signup-typo ">sign up</div></button>
        </Link>
      </div>
      <div className="mt-[18px] md:mt-[-56px] ml-[44px] md:ml-[210px] ">
     <Link to = "/Login">  
      <button className="button2 text-white px-11 py-2 hover:bg-pink-950"><div className="freetrial-typo signuplayout signup-typo" >Login </div></button>
      </Link> 
      </div>
      <div className="mt-[38px] md:mt-[-56px] ml-[-34px] md:ml-[410px] ">
     <Link to = "/Subject_page">  
      <button className="button2 text-white px-11 py-2 hover:bg-pink-950"><div className="freetrial-typo signuplayout signup-typo" >Freshman Free trial
      
       </div></button>
      </Link> 
      </div>
    </div>
    </div>
      

      <div className={` hidden md:block ml-[px] flex-1 flex  md:my-0 my-10 relative unscroll`}>
  <img src={robot} className=" h-screen  ml-[100px] " />
  
</div>

      
    </section>
    


 
 



</>
  );
};

export default Hero;
