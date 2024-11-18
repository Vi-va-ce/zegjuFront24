import React, { useState, useEffect } from 'react';
import { Logos, Book, open } from '../../assets';

function SideNote({ chapters, onChapterSelect, subjectName }) {
  const [visibleChapterIndex, setVisibleChapterIndex] = useState(0);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [selectedSubchapterIndex, setSelectedSubchapterIndex] = useState(0);

  useEffect(() => {
    onChapterSelect(selectedChapterIndex, selectedSubchapterIndex);
  }, [selectedChapterIndex, selectedSubchapterIndex, onChapterSelect]);

  const toggleChapter = (chapterIndex) => {
    setVisibleChapterIndex(visibleChapterIndex === chapterIndex ? null : chapterIndex);
  };

  const handleSubchapterClick = (chapterIndex, subchapterIndex) => {
    setSelectedChapterIndex(chapterIndex);
    setSelectedSubchapterIndex(subchapterIndex);
  };

  return (
    <div className=''>
      <div className='bg-white md:w-[350px] w-[221px]  md:h-[160px] pb-4 '>
        <div className='flex justify-between items-center md:pt-[66px]'>
          <div className='flex'>
            <div className='hidden md:block pt-2 pl-4'>
              <img src={Book} className='' alt='Book' />
            </div>
            <p className='text-[24px] text-[20px] pl-[13px] text-black font-bold pl-4'>Chapters</p>
          </div>
          <div className='hidden md:block'>
            <img
              src={Logos}
              className='md:w-[124px] md:h-[25px] w-[74.53px] h-[28.24px]'
              alt='Uni Logo'
            />
          </div>
        </div>
        <div className='pt-6'>
          <div className='border-2 border-solid border-[rgba(174,150,226,0.35)]'></div>
        </div>
      </div>

      <div className='bg-white md:h-[800px] md:w-[350px] h-[762px] w-[221px] overflow-y-auto '>
        <div className='pl-8'>
          <p className='text-[rgba(150,109,237,1)] text-[24px] font-semibold font-mulish'>{subjectName}</p>
        </div>
        {chapters.map((chapter, chapterIndex) => (
          <div key={chapter.chapterName} className='pt-4'>
            <div className='flex justify-center items-center'>
              <button
                className={`w-[336px] h-[48px] bg-[rgba(236,236,236,0.9)] rounded-lg flex items-center justify-center px-4 ${
                  visibleChapterIndex === chapterIndex ? 'text-[rgba(150,109,237,1)]' : 'text-black'
                }`}
                onClick={() => toggleChapter(chapterIndex)}
              >
                <p className='font-mulish font-semibold md:text-[24px] leading-[30.12px] text-[20px] font-mulish'>
                  {`Chapter ${chapterIndex + 1}`}
                </p>
                {visibleChapterIndex === chapterIndex && (
                  <div className='ml-16'>
                    <img src={open} alt='Open Icon' className='w-6 h-6' />
                  </div>
                )}
              </button>
            </div>

            {visibleChapterIndex === chapterIndex && (
              <div className='ml-4 border-l-2 border-[rgba(198,198,198,0.8)]'>
                {chapter.subchapters.map(
                  (subchapter, subchapterIndex) =>
                    subchapter.subChapterName && (
                      <button
                        key={subchapter.subChapterName}
                        className={`${
                          selectedChapterIndex === chapterIndex && selectedSubchapterIndex === subchapterIndex ? 'text-[rgba(150,109,237,1)]' : 'text-black'
                        } md:pl-4 font-mulish font-semibold md:text-[21px] leading-[30.12px] text-[20px] pl-4 md:p-2 p-2 text-left`}
                        onClick={() => handleSubchapterClick(chapterIndex, subchapterIndex)}
                      >
                        {subchapter.subChapterName}
                      </button>
                    )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNote;
