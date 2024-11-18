import React from 'react';
import { star2 } from '../../assets';
import { Link } from 'react-router-dom';

function StartCircle({ id }) {
  let linkTo = '';

  if (id === 'MathCalculatorDiagnosticTest') {
    linkTo = '/DMath';
  } else if (id === 'MathNoCalculatorDiagnosticTest') {
    linkTo = '/Dmathnc';
  } else if (id === 'WritingAndLanguageDiagnosticTest') {
    linkTo = '/Dwriting';
  } else if (id === 'EvidenceBasedReadingDiagnosticTest') {
    linkTo = '/Devidence';
  }
  else if (id === 'MathCalculatorPracticeTest') {
    linkTo = '/Pmath';
  }else if (id === 'MathNoCalculatorPracticeTest') {
    linkTo = '/Pnmath';
  }else if (id === 'WritingAndLanguagePracticeTest') {
    linkTo = '/Pwriting';
  }else if (id === 'EvidenceBasedReadingPracticeTest') {
    linkTo = '/Pevidence';
  }
  else if (id === 'MathCalculatorFinalTest') {
    linkTo = '/FMathc';
  }else if (id === 'MathNoCalculatorFinalTest') {
    linkTo = '/Fmathnc';
  }else if (id === 'WritingAndLanguageFinalTest') {
    linkTo = '/Fwriting';
  }else if (id === 'EvidenceBasedReadingFinalTest') {
    linkTo = '/Fevidence';
  }

  return (
    <>
      {linkTo && (
        <Link to={linkTo}>
          <button className='w-[70px] h-[35px] bg-stone-200 hover:bg-stone-400 rounded-lg ml-[-65px] mt-[-15px] absolute border border-stone-400'>
            <p className='text-green-600 text-[13px] font-bold'>Start</p>
          </button>
        </Link>
      )}
      <div className="relative w-[60px] h-[60px] border-2 border-black border-opacity-20 rounded-full">
        <div className='ml-[3px] mt-[3px] w-[50px] h-[50px] bg-custom-circle rounded-full'>
          <div className='ml-3 pt-3'>
            <img className="w-[25px] h-[25px]" src={star2} alt="Star" />
          </div>
        </div>
      </div>
    </>
  );
}

export default StartCircle;