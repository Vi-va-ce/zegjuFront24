import React from 'react';
import ProgressCircles from './ProgressCircles';
import DoneCircle from './DoneCircle';
import StartCircle from './StartCircle';
import { Character1 } from '../../assets';
import Board from './Board';

function DiagnosticTestMap({data}) {
  const ids = [
    'MathCalculator',
    'MathNoCalculator',
    'WritingAndLanguage',
    'EvidenceBasedReading',
  ];

  const renderComponent = (id) => {
    if (data === 'NotActivated') {
      return <ProgressCircles />;
    } else if (data === 'alldone') {
      return <DoneCircle />;
    } else if (data === id) {
      return <StartCircle id={id + "DiagnosticTest"} />;
    } else {
      const startIndex = ids.indexOf(id);
      const startCircleRendered = ids.slice(0, startIndex).some((item) => data === item);

      if (startCircleRendered) {
        return <ProgressCircles />;
      } else {
        return <DoneCircle />;
      }
    }
  };


  return (
    <div className='flex ml-[0px] md:ml-[130px]'>
      <div>
        <div id='MathCalculator' className='ml-[162.75px] mt-[20px]'>
          {renderComponent('MathCalculator')}
        </div>
        <div id='MathNoCalculator' className='ml-[140.47px] mt-[10px]'>
          {renderComponent('MathNoCalculator')}
        </div>
        <div id='WritingAndLanguage' className='ml-[130.97px] mt-[10px]'>
          {renderComponent('WritingAndLanguage')}
        </div>
        <div id='EvidenceBasedReading' className='ml-[140.47px] mt-[10px]'>
          {renderComponent('EvidenceBasedReading')}
        </div>
      </div>


      <div className='mt-[193px] md:mt-[140px] ml-[0px] md:ml-[-100px]'>
        <img className="w-[101.89px] md:w-[390.89px] h-[105.49px] md:h-[185.49px]" src={Character1} alt="Character" />
      </div>
       
      <Board data={data} />
    </div>
  );
}

export default DiagnosticTestMap;