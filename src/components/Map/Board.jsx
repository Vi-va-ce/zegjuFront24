import React from 'react';
import DoneStick from './DoneStick';
import NotDoneStick from './NotDoneStick';

function Board({data}) {

  const ids = [
    'MathCalculator',
    'MathNoCalculator',
    'WritingAndLanguage',
    'EvidenceBasedReading',
  ];

  const renderComponent = (id) => {
    if (data === 'NotActivated') {
      return <NotDoneStick />;
    } else if (data === 'alldone') {
      return <DoneStick />;
    } else if (data === id) {
      return <NotDoneStick />;
    } else {
      const startIndex = ids.indexOf(id);
      const NotDoneStickRendered = ids.slice(0, startIndex).some((item) => data === item);

      if (NotDoneStickRendered) {
        return <NotDoneStick />;
      } else {
        return <DoneStick />;
      }
    }
  };

  return (
    <div className={` ${data === 'NotActivated' ? 'bg-newbackground' : 'bg-rightcorner-box'} w-[114.96px] md:w-[214.96px] h-[180.61px] md:h-[340.61px] ml-[-59px] md:ml-[-10px] mt-[10px] md:mt-[-70px] rounded-lg relative`}>
      <div className='absolute'>
        <div className='mt-6 md:mt-8 ml-4'>
          <div id='MathCalculator'>
            <p className='text-white text-[8px] md:text-[16px]'>Math With Calculator</p>
            <div className='mt-2 md:mt-3'>{renderComponent('MathCalculator')}</div>
          </div>

          <div id='MathNoCalculator' className='mt-2 md:mt-6'>
            <p className='text-white text-[8px] md:text-[16px]'>Math With no Calculator</p>
            <div className='mt-2  md:mt-3'>{renderComponent('MathNoCalculator')}</div>
          </div>

          <div id='WritingAndLanguage' className='mt-2 md:mt-6'>
            <p className='text-white text-[8px] md:text-[16px]'>Writing and Language</p>
            <div className='mt-2  md:mt-3'>{renderComponent('WritingAndLanguage')}</div>
          </div>

          <div id='EvidenceBasedReading' className='mt-2 md:mt-6'>
            <p className='text-white text-[8px] md:text-[16px]'>Evidence based reading</p>
            <div className='mt-2  md:mt-3'>{renderComponent('EvidenceBasedReading')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;