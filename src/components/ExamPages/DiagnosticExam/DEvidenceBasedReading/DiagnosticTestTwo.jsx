import React from 'react';

const DiagnosticTestTwo = ({ currentIndex, timer }) => {
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Check if currentIndex is greater than 27
  const limitedIndex = currentIndex > 32 ? 32 : currentIndex;

  return (
    <div className="md:p-3.5 pt-4 md:ml-[120px] ml-[12px] ">
      <div className='md:w-[1085px] md:h-[65px] w-[360.13px] h-[37.72px] bg-white md:rounded-[33.83px] rounded-xl relative'>
        <div className='md:w-[230px] md:h-[65px] w-[94.90px] h-[37.72px] bg-gradient-to-r from-indigo-950 to-teal-800 md:rounded-[33.83px] rounded-xl absolute '>
          <p className='counter w-[230px] h-[15px] text-cyan-300 md:text-xl text-[7.94px] font-semibold font-family md:ml-4 md:mt-4 ml-2 mt-3'>
            Question number: {limitedIndex + 1}
          </p>
        </div>
        <div className="absolute md:ml-[510px] ml-[160px] md:mt-0 mt-2 ">
          <h1 className='diagnostic-text  md:text-4xl text-[13.81px] font-semibold '>Diagnostic test</h1>
          <p className='md:text-sm text-[7.12px] text-gray-500 md:mt-1 md:ml-4 ml-4'>Evidence Base Reading</p>
        </div>
        {timer > 0 && (
          <p className='md:ml-[1010px] md:mt-[20px] ml-[300px] mt-[7px] absolute '>{formatTime(timer)}</p>
        )}
      </div>
    </div>
  );
};

export default DiagnosticTestTwo;