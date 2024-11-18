import React, { useEffect, useState } from 'react';
import { avatar } from '../assets';

function Topscore() {
  const [performaersData, setPerformaersData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://4001e70e-bd76-4e9e-ab48-4c71f3293c6f.mock.pstmn.io/api/v2/leaderBoard');
        const data = await response.json();
        setPerformaersData(data.best_Performaers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='score-board  md:w-[440px] md:h-[270px] w-[300px] h-[205px] md:rounded-[40px] rounded-xl shadow md:ml-[57px] ml-2'>
      {performaersData && (
        <>
          <div className='pt-5'>
            <div className='md:w-[410px] md:h-[64px] w-[277.22px] h-[40.98px] ml-2 bg-teal-600 hover:bg-teal-900 md:rounded-[40px] rounded-[22.77px] shadow'>
              <div className='md:mt-4 mt-2 md:ml-16 ml-10 absolute'>
                <p>{performaersData.degsew1.fname} {performaersData.degsew1.lname}  and score: {performaersData.degsew1.totalScore}</p>
              </div>
              <div className='md:w-[55px] md:h-[55px] w-[30px] h-[30px] absolute pt-3 pl-3'>
                <img src={avatar} alt='avatar' />
              </div>
            </div>
          </div>

          <div className='pt-4'>
            <div className='md:w-[410px] md:h-[64px] w-[277.22px] h-[40.98px] ml-3 bg-teal-800 hover:bg-teal-900 md:rounded-[40px] rounded-[22.77px] shadow'>
              <div className='md:mt-4 mt-2 md:ml-16 ml-10 absolute'>
                <p>{performaersData.degsew2.fname} {performaersData.degsew2.lname}  and score: {performaersData.degsew2.totalScore}</p>
              </div>
              <div className='md:w-[55px] md:h-[55px] w-[30px] h-[30px] absolute pt-3 pl-3'>
                <img src={avatar} alt='avatar' />
              </div>
            </div>
          </div>

          <div className='pt-4'>
            <div className='md:w-[410px] md:h-[64px] w-[277.22px] h-[40.98px] ml-3 bg-indigo-950 hover:bg-teal-900 md:rounded-[40px] rounded-[22.77px] shadow'>
              <div className='md:mt-4 mt-2 md:ml-16 ml-10 absolute'>
                <p>{performaersData.degsew3.fname} {performaersData.degsew3.lname} and score: {performaersData.degsew3.totalScore}</p>
              </div>
              <div className='md:w-[55px] md:h-[55px] w-[30px] h-[30px] absolute pt-3 pl-3'>
                <img src={avatar} alt='avatar' />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Topscore;