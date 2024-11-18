import React, { useState, useEffect } from 'react';

function PracticeMain({ subjectId, chapters, onChapterClick }) {
  const [displayedChapters, setDisplayedChapters] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeChapter, setActiveChapter] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showPopup, setShowPopup] = useState(true);

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
    setShowPopup(false);
  };

  const chaptersToShow = isMobile ? 3 : 5;
  const visibleChapters = chapters.slice(currentIndex, currentIndex + chaptersToShow);

  const showPrevButton = currentIndex > 0;
  const showNextButton = currentIndex + chaptersToShow < chapters.length;

  return (
    <div>
      <div className='flex md:pl-[100px] pl-12'>
        <p className='md:text-[26px] text-[16px] font-mulish font-bold text-blue-100'>
          {subjectId}
        </p>
      </div>

      <div className='flex items-center justify-center w-screen md:pt-4 md:pb-4 pt-4 pb-4'>
        <div className='md:w-[1120px] w-[361px] h-[48px] md:h-[56px] bg-blue-100 rounded-xl'>
          <div className='flex'>
            {showPrevButton && (
              <div className='p-2'>
                <button
                  className='md:w-[136px] w-[104px] h-[32px] md:h-[40px] bg-blue-100 rounded-lg'
                  onClick={handlePrev}
                  disabled={activeChapter !== null}
                >
                  Prev
                </button>
              </div>
            )}
            {visibleChapters.map((chapter, index) => (
              <div key={index} className='p-2'>
                <button
                  className={`md:w-[136px] w-[90px] h-[32px] md:h-[40px] rounded-lg ${
                    activeChapter === index + currentIndex ? 'bg-white' : 'bg-slate-200'
                  }`}
                  onClick={() => handleChapterClick(index)}
                  disabled={activeChapter !== null}
                >
                  <p className={`font-mulish font-semibold md:text-[24px] text-[16px] ${
                    activeChapter === index + currentIndex ? 'text-blue-100' : 'text-white'
                  }`}>
                    Exam {currentIndex + index + 1}
                  </p>
                </button>
              </div>
            ))}
            {showNextButton && (
              <div className='p-2'>
                <button
                  className='md:w-[136px] w-[104px] h-[32px] md:h-[40px] bg-blue-100 rounded-lg'
                  onClick={handleNext}
                  disabled={activeChapter !== null}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-lg'>
            <p className='mb-4 text-lg font-bold'>Choose a Chapter</p>
            <div className='flex flex-wrap'>
              {chapters.map((chapter, index) => (
                <button
                  key={index}
                  className='m-2 p-2 bg-blue-100 rounded-lg'
                  onClick={() => handleChapterClick(index)}
                >
                  Chapter {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PracticeMain;