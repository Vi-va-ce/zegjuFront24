import React from 'react';
import { Link } from 'react-router-dom';

function Box({ Subject_name, textClass, onNoteButtonClick}) {
  const handleNoteButtonClick = () => {
    onNoteButtonClick(Subject_name);
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
        <Link to='/Notez'>
          <button className='border-solid border-2 bg-gradient-to-r from-[#966DED] to-[#C23FCD] rounded-md w-[203px]  h-[38px]  ml-2.5'
          onClick={handleNoteButtonClick}
          >
            <p className='text-white  font-mulish text-align-center text-[24px]'>
              Note
            </p>
          </button>
        </Link>
        
        
      </div>
    </div>
  );
}

export default Box;