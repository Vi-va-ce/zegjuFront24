import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import { star,jonly} from "../assets";
import { Link } from "react-router-dom";

import b1 from "./b1.svg"
import b2 from "./b2.svg"
import d3 from "./d3.svg"
import b4 from "./b4.svg"
import Line1 from "./Line1.svg"
import Line2 from "./Line2.svg"
import x342 from "./342.svg"
import x341 from "./341.svg"
import x96 from "./96.svg"
import x345 from "./345.svg"
import x347 from './347.svg'
import x348 from './348.svg'


const Hero = () => {
  return (
    <>
    <section id="home" className={`page-wrapper  flex md:flex-row flex-col `}>
     
      <div className=''>
        

      <div className="relative">
      
  <div className="gradient-text h-full text-[57.36px] md:w-[521px] w-full  font-bold ml-[40px] md:ml-0   md:text-7xl">
    practice leads to <br/> mastery
  </div>
 
</div>
        <p className={`${styles.paragraph} ml-[40px] md:ml-0  max-w-[470px] mt-[100px] md:mt-[0px] `}>
        We created a stress-free strategy to get you ready for the SAT exam without adding extra pressure.
        </p>
        <div className="mt-5">
      <div className="mt-[-250px] md:mt-[0px] ml-[40px] md:ml-0 ">
        <Link to="/Otp">
           <button className="button1 text-white px-4 py-2 mr-3 hover:bg-emerald-950"><div className="signup-layout signup-typo ">sign up</div></button>
        </Link>
      </div>
      <div className="mt-[180px] md:mt-[-56px] ml-[40px] md:ml-[210px] ">
     <Link to = "/Login">  
      <button className="button2 text-white px-11 py-2 hover:bg-pink-950"><div className="freetrial-typo signuplayout signup-typo" >Login </div></button>
      </Link> 
      </div>
    </div>
      </div>

      <div className={` hidden md:block ml-[110px] flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative unscroll`}>
  <img src={robot} alt="billing" className="object-cover h-screen relative ml-[100px] z-[5]" />
  
</div>

      
    </section>
     <div>
     <div className="hidden md:block absolute w-[720px] h-[295px] ml-[200px]  bg-purple-400 bg-opacity-40 rounded-3xl"></div>

    <div className="absolute md:w-[649px] w-[360px] md:h-[246px] h-[134px] md:ml-[233px] ml-3.5 md:mt-[24px]  bg-indigo-600 md:rounded-3xl rounded-lg">
       <div>
         <div className="absolute md:ml-8 ml-10 mt-4" > <img src={x342} className='md:h-[183px] h-[110px]'/></div>
         <div className="absolute md:ml-[220px] ml-[110px] md:mt-[10px] mt-4" > <img src={x341} className='md:w-[90px] w-[40px]' /></div>



         <div class="absolute font-inter font-semibold md:text-[30px]  text-white  md:ml-[44px] ml-8 mt-12 md:mt-[70px]">
           Buy the package <br/> that suits you.
         </div>
       </div>
        <div className="absolute md:w-[520px] w-[260px] md:h-[860px] h-[430px] md:ml-[163px] ml-[87px] md:mt-[-70px] mt-[-29px]" > <img src={b1} className='' /></div>
        <div className="absolute md:mt-[184px] mt-[105px] md:ml-4 ml-2" > <img src={x96} className='md:w-[60px] w-[26px]' /></div>
        <div className="absolute md:mt-[190px] mt-[100px] md:ml-[120px] ml-[60px]" > <img src={x345} className='md:w-[30px] w-[18px]' /></div>

     </div>
  </div>


 <div className='mt-[]'>
   <div className="hidden md:block absolute w-[720px] h-[295px] ml-[200px] mt-[340px]  bg-green-400 bg-opacity-40 rounded-3xl"></div>
   <div className="absolute md:w-[649px] w-[330px] md:h-[246px] h-[134px] md:ml-[233px] ml-3.5 md:mt-[364px] mt-[240px] bg-green-500    md:rounded-3xl rounded-lg">
     <div>
       <div><img src={b2} className='md:mt-[-80px] md:ml-[-120px]'/></div>
         <div className="absolute md:ml-[420px] md:mt-[-300px] ml-8 mt-4" > <img src={x347} className='md:h-[183px] h-[110px]' /></div>
         <div className="absolute md:ml-[380px] ml-[110px] md:mt-[-180px] mt-4" > <img src={x348} className='md:w-[90px] w-[40px]' /></div>
         <div class="absolute font-inter font-semibold md:text-[30px]  text-white  md:ml-[384px] ml-8 mt-12 md:mt-[-260px]">
               
          Take personalized<br/>
          tests to improve<br/>
          your efficiency<br/>

         </div>
      </div>

   </div>


 </div>

 



</>
  );
};

export default Hero;
