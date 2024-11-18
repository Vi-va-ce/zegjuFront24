import React from 'react'
import ProgressCircles from './ProgressCircles';
import DoneCircle from './DoneCircle';
import StartCircle from './StartCircle';
import { character2 } from '../../assets';
import Board from './Board';
import Board2 from './Board2';

function PracticeTestMap({data}) {
    
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
        return <StartCircle id={id + "PracticeTest"} />;
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
      <div className='flex ml-[-10px] md:ml-[130px]'>
          <div className='mt-[193px] md:mt-[140px] ml-[0px] md:ml-[-100px]'>
          <img className="w-[171.89px] md:w-[390.89px] h-[135.49px] md:h-[185.49px]" src={character2} alt="Character2" />
        </div>

        <div className='ml-[-50px]'>
          <div id='MathCalculator' className='ml-[10px] mt-[20px]'>
            {renderComponent('MathCalculator')}
          </div>
          <div id='MathNoCalculator' className='ml-[50px] mt-[10px]'>
            {renderComponent('MathNoCalculator')}
          </div>
          <div id='WritingAndLanguage' className='ml-[70px] mt-[10px]'>
            {renderComponent('WritingAndLanguage')}
          </div>
          <div id='EvidenceBasedReading' className='ml-[50px] mt-[10px]'>
            {renderComponent('EvidenceBasedReading')}
          </div>
        </div>  
    <div className='ml-[77px] md:ml-[140px]'>
    <Board2 data={data} />
    </div> 
       
      </div>
  )
}

export default PracticeTestMap