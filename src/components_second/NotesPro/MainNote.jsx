import React from 'react';
import MainNoteBar from './MainNoteBar';
import NotePics from './NotePics';

function MainNote({ subjectName, subchapterNote, selectedChapterIndex, selectedSubchapterIndex }) {
  return (
    <div className=''>
      <div className='hidden md:block md:pt-[30px]'>
        <MainNoteBar subjectName={subjectName} />
      </div>

      <div className='md:pt-[10px] '>
        <NotePics 
          subchapterNote={subchapterNote} 
          selectedChapterIndex={selectedChapterIndex} 
          selectedSubchapterIndex={selectedSubchapterIndex} 
          subjectName={subjectName} 
        />
      </div>
    </div>
  );
}

export default MainNote;
