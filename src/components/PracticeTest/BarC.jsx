import React from "react";

const BarC = ({ data }) => {
  // Get the bar container width
  const containerWidth = 166.3;

  // Calculate bar width as percentage of container
  const barWidth = data === 0 ? '0' : `${((data * (containerWidth - 2)) / 100) - 2}px`;
  
  return (
    <div className="flex justify-center p-2">
      <div style={{ width: containerWidth + 'px' }} className=" h-[38px] bg-indigo-950 rounded-[18px] ">
        <div className=' mt-0.5'>
          <div className="ml-4">
            <div className="w-[71.10px] h-[4.3px] text-white text-sm font-bold font-['Inter'] mb-3">Correct</div>
          </div>
          <div style={{ width: barWidth }} className={`animate-pulse  h-[8.3px] bg-cyan-400 rounded-[18px] ml-1`}></div>
        </div>
      </div>
    </div>
  );
};

export default BarC;