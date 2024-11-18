import React from 'react';
import { Link } from 'react-router-dom';

function Box2({ Subject_name, textClass, onNoteButtonClick, onPracticeButtonClick,onExamButtonClick}) {
  const handleNoteButtonClick = () => {
    onNoteButtonClick(Subject_name);
  };
  const handlePracticeButtonClick = () => {
    onPracticeButtonClick(Subject_name);
  };
  const handleExamButtonClick = () => {
    onExamButtonClick(Subject_name);
  };

  // Check if there is a space between the subject names
  const hasSpaceBetween = Subject_name.trim().includes(' ');

  return (
    <div className='w-[332px] h-[159px]  bg-white shadow rounded-lg shadow-[0_4px_6px_0_rgba(0,0,0,0.25)]'>
      <div className='bg-black w-[332px] h-[8px] rounded-t-lg'></div>

      <div className='flex justify-between items-center '>
        <div>
          <p className={`pl-[24px] md:pl-[30px] pt-[18px] md:pt-[20px] font-bold ${textClass} text-[24px] `}>{Subject_name}</p>
        </div>

      </div>
      
      <div
        id='nextbuttons'
        className={`${hasSpaceBetween ? 'mt-[8px]' : 'mt-[44px]'} pl-[14px]`}
      >
        <Link to='/NotesPro'>
          <button className='border-solid border-2 bg-gradient-to-r from-[#966DED] to-[#C23FCD] rounded-md w-[193px]  h-[38px]  ml-2.5'
          onClick={handleNoteButtonClick}
          >
            <p className='text-white  font-mulish text-align-center text-[24px]'>
              Note
            </p>
          </button>
        </Link>
        
        <Link to='/PracticePro'>
        
          <button
            className='border border-[rgba(150,109,237,1)] hover:bg-green-100 rounded-md w-[84px] h-[30px]  ml-5'
            onClick={handlePracticeButtonClick}
          >
            <p className='text-[rgba(85,62,135,1)] font-mulish text-align-center text-[18px]'>
              Practice
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Box2;