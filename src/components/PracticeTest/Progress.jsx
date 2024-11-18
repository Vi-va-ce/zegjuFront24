import React from "react";
const BarProgress = ({data}) => {

    
    // Get the bar container width
    const containerWidth = 170.3;
  
    // Calculate bar width as percentage of container
    const barWidth = `${(data*containerWidth)/100}px`;
  
    return (
      <div className="flex justify-center pb-2">
        <div style={{ width: containerWidth + 'px' }} className="w-[1900px] h-[38px] bg-indigo-500 rounded-[18px]">
                <div className=' mt-0.5'>
                 <div className="ml-4">
                    <div class="w-[85.50px] h-[4.3px] text-white text-sm font-bold font-['Inter'] mb-3">Progress</div>
                 </div>
                </div>
                <div className="w-[202.54px] h-[13.83px] relative">
                    <div className="w-[30.80px] h-[13.01px] left-4  top-0 absolute bg-cyan-300  bg-opacity-50 rounded-[18px]"></div>
                    <div className="w-[30.80px] h-[13.01px] ml-12  top-[0.81px] absolute bg-cyan-300 bg-opacity-50 rounded-[18px]"></div>
                    <div className="w-[30.80px] h-[13.01px] ml-20 top-[0.81px] absolute bg-cyan-300 bg-opacity-50 rounded-[18px]"></div>
                    <div className="w-[30.80px] h-[13.01px] ml-28 top-[0.81px] absolute bg-cyan-300 bg-opacity-50 rounded-[18px]"></div>
                </div>
        </div>
    </div>
      
    );
  };
  
  export default BarProgress