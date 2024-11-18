import styles from "../style";
import { robot,start,jwout,kofya,first1,secondone,decone,decons,deconlast,decont,deconf} from "../assets";
import React from "react";



const HeroDiagnostic = () => {
  return (
  <div className="flex">
    <div className="">
        <div className="relative w-[300px] h-[119px] ml-[20px] mt-[10px] ">
            <img src={kofya} alt="kofya" className="md:hidden" />
            <div className="absolute top-0 left-0 ml-[40px] md:ml-[120px] mt-[120px] md:mt-[30px]">
            <div className="text-cyan-300 text-3xl md:text-[64px] font-bold font-['Inter']">WELCOME!</div>
            </div>
        </div>
        <div className="ml-[93px] md:ml-[160px] relative w-[180px] h-[400px] ml-[84px] mt-[60px] md:mt-[-10px] ">
          <img src={jwout} alt="jwout" className="md:hidden" />
         <div className="absolute top-0 left-0 ml-[-30px] md:ml-[-8px]">
            <div className=" w-[273px] md:w-[638px] h-[102.70px] md:h-40  text-white text-[30.39px] md:text-[52px] font-extrabold font-['Inter'] leading-[1.2] md:leading-[0.9]">Take the diagnostic <br/>test to start your<br/> preparation. </div>
            <div className="w-[254px] md:w-[839px] text-white text-base md:text-[23px]  font-normal mt-3 ">A full-length diagnostic test with conditions resembling the<br/> actual SAT
             test will be requested of you if this is your first <br/>time signing in.
             </div>
            <div className="text-cyan-300 text-opacity-75 text-base md:text-[28px] font-normal font-['Inter'] mt-2">Estimated time: 2 hours and 30 minutes</div>
            <a href="your_first_image_url">
            <div className="flex mt-6">
              <div className="text-cyan-300 text-[27.12px] font-bold font-['Inter'] mr-2">Start test</div> 
             <img src={start}  className="w-[16px]" />
            </div>
            </a>
         </div>
       </div>  
       <div className="flex mt-8 pb-5 md:hidden">
          <a href="your_first_image_url">
            <img src={first1} className="w-[20px] h-[20px] ml-6" alt="First Image" />
          </a>
          <a href="your_second_image_url">
            <img src={secondone} className="w-[20px] h-[20px] ml-[270px]" alt="Second Image" />
          </a>
        </div>
   </div>
   <div className="hidden md:block">
   <img src={decone}  className="w-[110px] h-[110px] ml-[400px] mb-[200px]" />
   <img src={deconlast}  className="w-[61px] h-[61px] ml-[750px] mt-[-260px]" />
   <img src={decons}  className="w-[61px] h-[61px] ml-[890px] mt-[-70px]" />
   <img src={decont}  className="w-[] h-[] ml-[760px] mt-[20px]" />
   <img src={deconf}  className="w-[] h-[] ml-[760px] mt-[-100px]" />
   <img className="w-[350px] h-[580px] mt-[-550px] ml-[450px] " src={robot} />
   
   
   </div>
   <div/>
  </div>
  );
};

export default HeroDiagnostic;
