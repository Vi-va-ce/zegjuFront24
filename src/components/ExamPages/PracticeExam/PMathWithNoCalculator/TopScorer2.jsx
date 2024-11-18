import React, { useEffect, useState } from 'react';
import  avatar  from "./avatar.svg";

function Topscorer2() {
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
    <div className=''>
      {performaersData && (
       
          <div className=''>
            <div className='w-[200px] h-[50px] bg-teal-600 hover:bg-teal-900 rounded-[40px] shadow ml-2'>
              <div className='mt-4 ml-16 absolute'>
                <p>{performaersData.degsew1.fname} {performaersData.degsew1.lname} </p>
              </div>
              <div className='w-[55px] h-[55px] absolute pt-3 pl-3 mb-2'>
                <img src={avatar} alt='avatar' />
              </div>
            </div>
          </div>
      )
}
</div>
  )
}

export default Topscorer2;