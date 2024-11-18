import React, { useState, useEffect } from 'react';
import { nextt, prevv } from '../../../assets';

function PracticeMain({ subjectId, chapters, onChapterClick }) {
  const [displayedChapters, setDisplayedChapters] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0); // Set Chapter 1 as active initially
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + displayedChapters);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - displayedChapters);
  };

  const handleChapterClick = (index) => {
    setActiveChapter(index + currentIndex);
    const value = index + currentIndex;
    onChapterClick(value);
  };

  const chaptersToShow = isMobile ? 3 : 5;
  const visibleChapters = chapters.slice(currentIndex, currentIndex + chaptersToShow);

  const showPrevButton = currentIndex > 0;
  const showNextButton = currentIndex + chaptersToShow < chapters.length;

  return (
    <div>
      <div className='flex md:pl-[100px] pl-12'>
        <p className='md:text-[26px] text-[16px] font-mulish font-bold text-teal-500'>
          {subjectId}
        </p>
      </div>

      <div className='flex items-center justify-center w-screen md:pt-4 md:pb-4 pt-4 pb-4'>
        <div className='md:w-[1120px] w-[361px] h-[48px] md:h-[56px] bg-violet-500 rounded-xl'>
          <div className='flex'>
            {showPrevButton && (
              <div className='p-2'>
                {isMobile ? (
                  <button
                    className='md:w-[136px] w-[104px] h-[32px] md:h-[40px] rounded-lg'
                    onClick={handlePrev}
                  >
                    <img src={prevv} alt='Next' className='w-[24px] h-[24px]'/>
                  </button>
                ) : (
                  <button
                    className='md:w-[136px] w-[104px] h-[32px] md:h-[40px] bg-white rounded-lg'
                    onClick={handlePrev}
                  >
                    <p className='font-mulish font-semibold md:text-[24px] text-[16px] text-violet-500'>
                      Next
                    </p>
                  </button>
                )}
              </div>
            )}
            {visibleChapters.map((chapter, index) => (
              <div key={index} className='p-2'>
                <button
                  className={`md:w-[136px] w-[90px] h-[32px] md:h-[40px] rounded-lg ${
                    activeChapter === index + currentIndex ? 'bg-white' : 'bg-slate-200'
                  }`}
                  onClick={() => handleChapterClick(index)}
                >
                  <p className={`font-mulish font-semibold md:text-[24px] text-[16px] ${
                    activeChapter === index + currentIndex ? 'text-violet-500' : 'text-white'
                  }`}>
                   Exam {currentIndex + index + 1}
                  </p>
                </button>
              </div>
            ))}
            {showNextButton && (
              <div className='p-2'>
                {isMobile ? (
                  <button
                    className='md:w-[136px] w-[104px] h-[32px] md:h-[40px] rounded-lg'
                    onClick={handleNext}
                  >
                    <img src={nextt} alt='Next' className='w-[24px] h-[24px]'/>
                  </button>
                ) : (
                  <button
                    className='md:w-[136px] w-[104px] h-[32px] md:h-[40px] bg-white rounded-lg'
                    onClick={handleNext}
                  >
                    <p className='font-mulish font-semibold md:text-[24px] text-[16px] text-violet-500'>
                      Next
                    </p>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeMain;