import React, { useState, useEffect } from 'react';
import { twentymore,zeromore,thirtymore,fourtymore,tenmore } from '../assets';


function Secondboard2({data}) {
  const {satMathScore}=data;
  const mathscore =  satMathScore;
  
  let image;

  if(mathscore > 40) {
    image = zeromore;
  } else if(mathscore > 30 && mathscore <= 40) {
    image = thirtymore;
  } else if(mathscore > 20 && mathscore <= 30) {  
    image = twentymore;
  } else if(mathscore > 10 && mathscore <= 20) {
    image = tenmore;
  } else {
    image = fourtymore;
  }

  return (
    <div className='secondboard-style2 ml-2 md:w-[220px] md:h-[260px] w-[147.03px] h-[220.38px]  md:rounded-[20px] rounded-xl md:mt-8 md:ml-52 md:ml-[645px] mt-80 ml-[180px]'>

<p className=' animate-pulse  ml-4 pt-2.5 secondboard-result md:text-[35px] text-[23.15px]'>{satMathScore}</p> 
<p className=' ml-4 text-white md:text-[20px] text-'>50</p>  
    <p className='mt-6 ml-4 text-white md:text-[28px]'>SAT Math</p>
      <img 
        src={image}
        className='animate-bounce md:ml-20 ml-8 mt-4 md:w-[109px] md:h-[109px] w-[70px] h-[63px] secondboard-image ' 
      />

    </div>
  )
}

export default Secondboard2;
