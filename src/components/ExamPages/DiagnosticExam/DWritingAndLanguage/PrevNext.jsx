import React from 'react';

function PrevNext({ currentIndex, totalItems, onPrevious, onNext }) {
  const shouldStopCounting = currentIndex >= 32; // Check if the current index is 33 or greater

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onPrevious();
    }
  };

  return (
    <div className='pt-[15px]'>
      <div className='bg-gray-300 md:ml-[370px] ml-[140px] md:w-[116px] w-[100px] md:h-[35px] h-[30px] rounded-full'>
        <div className='flex md:pt-2 pt-2 md:ml-0.5 ml-1'>
          <button
            className='hover:bg-gray-200 text-black font-bold rounded'
            onClick={handlePrevious}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
            </svg>
          </button>

          <div className='flex md:font-semibold md:text-[16px] text-[11px] ml-4'>
            {/* Display the current index if it's less than 33, otherwise display 33 */}
            {currentIndex < 32 ? currentIndex + 1 : 33} / 33
          </div>

          <button
            className='hover:bg-gray-200 ml-3 rounded'
            onClick={onNext}
            disabled={shouldStopCounting} // Disable the button when should stop counting
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrevNext;