import React from 'react';
import { twentymore, zeromore, thirtymore, fourtymore, tenmore } from '../assets';

function Secondboard({ data }) {
  const { satEnglishScore}=data;
  const englishScore2 = satEnglishScore;

  let image;

  if (englishScore2 > 40) {
    image = zeromore;
  } else if (englishScore2 > 30 && englishScore2 <= 40) {
    image = thirtymore;
  } else if (englishScore2 > 20 && englishScore2 <= 30) {
    image = twentymore;
  } else if (englishScore2> 10 && englishScore2 <= 20) {
    image = tenmore;
  } else {
    image = fourtymore;
  }

  return (
    <div className='secondboard-style ml-2 md:w-[220px] md:h-[260px] w-[147.03px] h-[220.38px]  md:rounded-[20px] rounded-xl md:mt-8 md:ml-2 mt-80 ml-4'>
      <p className='animate-pulse ml-4 pt-2.5 secondboard-result md:text-[35px] text-[23.15px]'>{satEnglishScore}</p>
      <p className='ml-4 text-white md:text-[20px] text-'>50</p>
      <p className='mt-6 ml-4 text-white md:text-[28px]'>SAT English</p>
      <img
        src={image}
        alt="score-image"
        className='animate-bounce md:ml-20 ml-8 mt-4 md:w-[109px] md:h-[109px] w-[70px] h-[63px] secondboard-image'
      />
    </div>
  );
}

export default Secondboard;