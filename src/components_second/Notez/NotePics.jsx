import React, { useState, useEffect } from 'react';
import { previcon, nexticon } from '../../assets';

function NotePics({ subchapterNote, selectedChapterIndex, subjectName }) {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(selectedChapterIndex);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [currentChapterNotes, setCurrentChapterNotes] = useState([]);
  const [watermarkVisible, setWatermarkVisible] = useState(false);

  useEffect(() => {
    setCurrentChapterIndex(selectedChapterIndex);
  }, [selectedChapterIndex]);

  useEffect(() => {
    const notes = subchapterNote.filter((note) => note.chapterIndex === currentChapterIndex);
    if (notes.length > 0) {
      setCurrentChapterNotes(notes);
      setCurrentNoteIndex(0);
    } else {
      setCurrentChapterNotes([]);
      setCurrentNoteIndex(0);
    }
  }, [currentChapterIndex, subchapterNote]);

  const handlePrevClick = () => {
    setCurrentNoteIndex((prevIndex) => (prevIndex === 0 ? currentChapterNotes.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentNoteIndex((prevIndex) => (prevIndex === currentChapterNotes.length - 1 ? 0 : prevIndex + 1));
  };

  const currentNote = currentChapterNotes[currentNoteIndex]?.Note || '';

  useEffect(() => {
    const handleKeyDown = () => setWatermarkVisible(true);
    const handleKeyUp = () => setWatermarkVisible(false);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className='pt-[85px] md:pt-[0px]'>
      <div className='ml-[30px] md:hidden'>
      
      </div>

      <div className="flex md:pt-[0] pt-4">
        <button onClick={handlePrevClick} className="button-icon hidden md:block">
          <img src={previcon} className="icon" alt="Previous" />
        </button>

        <div className="flex justify-center w-full">
          <img
            src={currentNote}
            className="md:w-[576px] md:h-[751px] w-[360px] h-[520px] md:rounded-2xl rounded-xl"
            alt={`Chapter ${currentChapterIndex}, Note ${currentNoteIndex + 1}`}
          />
          {watermarkVisible && (
            <div className="absolute inset-0 flex items-center justify-center  bg-black">
              <p className="text-4xl font-bold text-white">ዋ</p>
            </div>
          )}
        </div>

        <button onClick={handleNextClick} className="button-icon hidden md:block">
          <img src={nexticon} className="icon" alt="Next" />
        </button>
      </div>
      
      <div className='flex justify-between items-center pt-8 pb-8 md:hidden'>
        <div className='pl-4'>
          <button onClick={handlePrevClick}>
            <p className='text-[16px] font-bold'>Previous</p>
          </button>
        </div>
        <div className='mr-[20px]'>
          <button onClick={handleNextClick}>
            <p className='text-[16px] font-bold'>Next</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotePics;
