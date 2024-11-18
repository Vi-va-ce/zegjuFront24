import { useMediaQuery } from 'react-responsive';
import React from 'react';
const MiniBarBlue = ({ data }) => {
  // Get the bar container width
  const containerWidth = 80;
  const containerWidthTwo = 29;

  // Calculate bar width as a percentage of the container
  const barWidth = data !== 0 ? `${((data * containerWidth) / 100) - 2}px` : '0px';
const barWidthTwo = data !== 0 ? `${((data * containerWidthTwo) / 100) - 2}px` : '0px';

  // Define media queries for responsiveness
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' }); // Adjust the max-width as needed

  return (
    <div className="flex">
      <div className=" md:w-[80px] w-[29px]  md:h-[10.3px] md:h-4 h-[4.87px] bg-zinc-300 md:rounded-[18px] rounded-[50px]">

        <div className=' '>
          <div className="ml-4">

          </div>

          <div style={{ width: isMobile ? barWidthTwo : barWidth }} className={`animate-pulse md:h-[8.3px] md:h-3 h-[4.87px] bg-cyan-300 md:rounded-[18px] rounded-[50px] `}></div>

        </div>
      </div>
    </div>
  );
};

export default MiniBarBlue;
