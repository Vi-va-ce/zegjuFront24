import React from 'react';
import { Link } from 'react-router-dom';
import { backb } from '../../assets';
import National_body from './National_body';

function National_Fronts({ onSubjectSelect }) {
  const handleSubjectClick = (subject) => {
    if (typeof onSubjectSelect === 'function') {
      onSubjectSelect(subject);
    } else {
      console.error('onSubjectSelect is not a function');
    }
  };

  return (
    <div className='bg-[#ecf7f8]'>
      <Link to='/'>
        <button className='pl-[12px] pt-[12px] transition-transform duration-300 hover:scale-110'>
          <img src={backb} alt="Back" />
        </button>
      </Link>
      <div className='flex items-center justify-center pb-3'>
        <p className='text-[16px] md:text-[22px] font-semibold underline underline-offset-3'>select subject</p>
      </div>
      <div className='pb-8 md:pb-[100px] pt-6 md:pt-[100px]'>
        <National_body onSubjectClick={handleSubjectClick} />
      </div>
    </div>
  );
}

export default National_Fronts;