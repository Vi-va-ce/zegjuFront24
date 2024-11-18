import React from 'react'
import ProgressCircles from './ProgressCircles';
import DoneCircle from './DoneCircle';
import StartCircle from './StartCircle';
import { character3,Completed} from '../../assets';

import Board3 from './Board3';


function FinalTestMap({data}) {

    
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
      }else if (data === id) {
        return <StartCircle id={id + "FinalTest"} />;
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
      <div>
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
          <img className="w-[101.89px] md:w-[390.89px] h-[105.49px] md:h-[185.49px]" src={character3} alt="Character3" />
        </div>
         
        <Board3 data={data} />
      </div>
      <div className='md:ml-[250px] ml-[69px] md:mt-[20px] mt-[10px]   md:mb-[20px] mb-[10px]'>
      <img className="w-[211.89px] md:w-[250.89px] h-[155.49px] md:h-[100.49px]" src={Completed} alt="completed" />
      </div>
      
      </div>
  )
}

export default FinalTestMap