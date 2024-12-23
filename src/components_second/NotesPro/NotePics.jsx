import React, { useState, useEffect } from 'react';
import { previcon, nexticon } from '../../assets';

function NotePics({ subchapterNote, selectedChapterIndex, selectedSubchapterIndex }) {
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [currentChapterNotes, setCurrentChapterNotes] = useState([]);
  const [watermarkVisible, setWatermarkVisible] = useState(false);

  // Update the current chapter notes when the selected indices change
  useEffect(() => {
    const notes = subchapterNote.filter(note =>
      note.chapterIndex === selectedChapterIndex
    );

    setCurrentChapterNotes(notes);

    // Reset note index if there are notes, otherwise set to 0
    if (notes.length > 0) {
      setCurrentNoteIndex(selectedSubchapterIndex); // Reset to the current subchapter index
    } else {
      setCurrentNoteIndex(0); // No notes found, reset to 0
    }
  }, [selectedChapterIndex, subchapterNote]);

  // Handle previous note
  const handlePrevClick = () => {
    setCurrentNoteIndex((prevIndex) => {
      if (currentChapterNotes.length === 0) return 0; // No notes to cycle through
      if (prevIndex === 0) {
        // If on the first note, go to the last note of the previous subchapter or the last note of the last chapter
        const prevSubchapterIndex = selectedSubchapterIndex > 0 ? selectedSubchapterIndex - 1 : currentChapterNotes.length - 1;
        return prevSubchapterIndex;
      } else {
        return prevIndex - 1;
      }
    });
  };

  // Handle next note
  const handleNextClick = () => {
    setCurrentNoteIndex((prevIndex) => {
      if (currentChapterNotes.length === 0) return 0; // No notes to cycle through
      if (prevIndex === currentChapterNotes.length - 1) {
        // If on the last note, go to the first note of the next subchapter or the first note of the next chapter
        const nextSubchapterIndex = selectedSubchapterIndex < currentChapterNotes.length - 1 ? selectedSubchapterIndex + 1 : 0;
        return nextSubchapterIndex;
      } else {
        return prevIndex + 1;
      }
    });
  };

  // Get the current note based on the current note index
  const currentNote = currentChapterNotes[currentNoteIndex]?.Note || '';

  // Watermark visibility logic
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

  // Prevent right-click context menu
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div className='pt-[85px] md:pt-[0px]'>
      <div className="flex md:pt-[0] pt-4">
        <button onClick={handlePrevClick} className="button-icon hidden md:block">
          <img src={previcon} className="icon" alt="Previous" />
        </button>

        <div className="flex justify-center w-full">
          <img
            src={currentNote}
            className="md:w-[576px] md:h-[751px] w-[360px] h-[520px] md:rounded-2xl rounded-xl"
            alt={`Chapter ${selectedChapterIndex}, Subchapter ${selectedSubchapterIndex + 1}`}
            onContextMenu={handleContextMenu}
          />
          {watermarkVisible && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
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
