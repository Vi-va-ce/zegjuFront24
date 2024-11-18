import React from 'react';

const DiagnosticTestHead = ({ currentIndex, timer }) => {
  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-3.5">
      <div className='counter-head rounded-3xl ml-32 relative'>
        <div className='counter rounded-3xl absolute bottom-0'>
          <p className='counter-text ml-20'>Question number {currentIndex + 1}/15</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"style={{ marginLeft:'4rem' }}>
          <h1 className='diagnostic-text text-2xl font-semibold '>Diagnostic Test</h1>
          <p className='text-sm text-gray-500 mt-2'>Math with calculator</p>
        </div>
        <p className='ml-12 absolute right-0 top-0' style={{ marginTop: '1.5rem', marginRight:'2rem' }}>{formatTime(timer)}</p>
      </div>
    </div>
  );
};

export default DiagnosticTestHead;