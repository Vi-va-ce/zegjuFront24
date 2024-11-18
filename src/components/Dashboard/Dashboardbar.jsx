import {chemical2,scientist} from '../../assets'
import { useMediaQuery } from 'react-responsive';
import React from "react";

const Dashboardbar = ({questionData}) => {
    
    // Get the bar container width
    const containerWidth = 420;
    const containerWidthtwo=159;
  
    // Calculate bar width as percentage of container
    const barWidth = questionData?.right_answer !== 0 ? `${((questionData?.right_answer * (containerWidth - 2)) / 100) - 2}px` : '0px';
    const barWidthTwo = questionData?.right_answer !== 0 ? `${((questionData?.right_answer *containerWidthtwo) / 100) - 2}px` : '0px';

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' }); // Adjust the max-width as needed
  
    return (
      <div className=" ">
        <div className="md:w-[420px] w-[159px] md:h-[140px] h-[53px] bg-white md:rounded-[20px] rounded-md ">
  
          <div className=' md:mt-0.5'>
          <div className="absolute md:ml-40 md:mt-12 ml-14 mt-3 text-black md:text-4xl font-normal font-['Inter']">Science</div>
          <div className="absolute md:w-[70px] md:h-8 w-[39.57px] h-[12.17px]  bg-white md:rounded-[20px] rounded-xl md:ml-44 md:mt-24 ml-14 mt-8"><div class="text-slate-900 md:text-[23px] text-[10px] font-normal font-['Inter'] md:ml-6 md:mb-32 ml-4">{questionData?.score}</div></div>
            <div className="md:ml-4">
             
            </div>
            
            <div style={{ width: isMobile ? barWidthTwo : barWidth }}  className={` md:h-[140px] h-[53px] bg-pink-400 hover:bg-pink-800 md:rounded-[18px] rounded-md `}>
            <img src={chemical2} alt="chemical" className="absolute md:w-[80px] md:h-[80px] w-[35px] h-[35px] md:ml-8 ml-2 md:mt-12 mt-4" />
            <img src={scientist} alt="scientist" className="absolute md:w-[80px] md:h-[80px] w-[45px] h-[45px] md:ml-96 ml-32 md:mt-12 mt-2 " />
            
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboardbar