import React from 'react';
import { star2 } from '../../assets';
function ProgressCircles() {
  return (
    <>
      <div className='relative w-[55px] h-[55px] bg-question-notdone rounded-full overflow-hidden'>
        <div className='ml-3.5 pt-3.5'>
          <img className="w-[25px] h-[25px]" src={star2} alt="Star" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 opacity-30 shadow-xl"></div>
      </div>
    </>
  );
}

export default ProgressCircles;