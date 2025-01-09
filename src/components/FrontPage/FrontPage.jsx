import React, { useEffect, useState, useCallback } from 'react';
import Header from './Header';
import Message from './Message';
import Explore from './Explore';
import Icons from './Icons';
import Exams from './Exams';
import NormalFooter from './NormalFooter';
import Foooter from './Foooter';
import Loader from '../../Loader';
import Peertopeer from './Peertopeer';
import { Practice } from '../../assets';

function FrontPage() {
  const [scrollMessageReceived, setScrollMessageReceived] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (scrollMessageReceived) {
      // Scroll to the desired section
      const homepage2Section = document.getElementById('Exams');
      if (homepage2Section) {
        homepage2Section.scrollIntoView({ behavior: 'smooth' });
        setScrollMessageReceived(false); 
      }
    }
  }, [scrollMessageReceived]);

  const handleScrollMessage = () => {
    setScrollMessageReceived(true);
  };

  return (
    <div className='bg-[#ecf7f8]'>
      <div className='pl-[16px] md:pl-24 pt-[32px] '>
        <Header />
      </div>

      <div className='pt-[50px]'>
        <Message />
      </div>

      <div className='pt-4'>
        <Explore onClickButton={handleScrollMessage} />
      </div>

      <div>
        <Icons />
      </div>

      <div className='pt-[11px]' id='Exams'>
        <Exams/>
      </div>

      <div>
        <Peertopeer/>
      </div>

      <div className='pt-8 md:pt-[100px]'>
        <NormalFooter />
      </div>

      <div className='pt-[31px] md:pt-[70px] pb-'>
        <Foooter />
      </div>
     
    </div>
  );
}

export default FrontPage;