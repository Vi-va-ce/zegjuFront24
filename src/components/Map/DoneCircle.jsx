import React from 'react';
import { right } from '../../assets';

function DoneCircle() {
  return (
    <>
      <div className='relative w-[55px] h-[55px] bg-custom-circle rounded-full'>
        <div className='ml-3.5 pt-3.5'>
          <img className="w-[27px] h-[27px]" src={right} alt="Right" />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 shadow-xl rounded-full"></div>
      </div>
    </>
  );
}

export default DoneCircle;