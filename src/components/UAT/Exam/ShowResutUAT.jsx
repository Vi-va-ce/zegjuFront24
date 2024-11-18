import React from 'react';
import { backb, medal } from '../../../assets';
import { Link } from 'react-router-dom';

function ShowResutUAT({ result }) {
  return (
    <div className='bg-[#ecf7f8]'>
      <Link to='/UAT'>
        <button className='pl-[12px] mt-[12px] transition-transform duration-300 hover:scale-110'>
          <img src={backb} className='' />
        </button>
      </Link>

      <div className='pt-[160px] md:pt-[30px] flex items-center justify-center pb-52'>
        <div className='shadow-[0_-1.5px_8.99px_0px_rgba(0,0,0,0.25)] shadow-[0_3px_8.99px_0px_rgba(0,0,0,0.25)] bg-white rounded-lg w-[347px] h-[378px] flex flex-col items-center justify-center'>
          <div className='flex items-center justify-center w-full h-[200px]'>
            <img src={medal} className='w-[122px] h-[122px]' />
          </div>
          <h2 className='mt-4'>Exam Results</h2>
          <p className='mt-2'>Correct Answers: {result.correctCount}</p>

          <ul className='mt-4'>
            {result.chapters.map((chapter, index) => (
              <li key={index} className='text-center'>{chapter.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShowResutUAT;