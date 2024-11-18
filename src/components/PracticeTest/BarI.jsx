import React from "react";
const BarI = ({data}) => {
    
    
    // Get the bar container width
    const containerWidth = 170.3;
    
  
    // Calculate bar width as percentage of container
    const barWidth = `${((data*containerWidth)/100)-2}px`;
  
    return (
      <div className="flex justify-center pb-2">
        <div style={{ width: containerWidth + 'px' }} className=" h-[38px] bg-violet-600 rounded-[18px]">
  
          <div className=' mt-0.5'>
            <div className="ml-4">
              <div className="w-[71.10px] h-[4.3px] text-white text-sm font-bold font-['Inter'] mb-3">Incorrect</div>
            </div>
            
            <div style={{ width:barWidth}} className={`animate-pulse  h-[8.3px] bg-red-600 rounded-[18px] ml-1`}></div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default BarI