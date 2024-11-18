import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { search, research, trigonometry } from "../../assets";
import Ebrw from './Ebrw';
import Questionoboard from './Questionoboard';
import FirstGraph from './FirstGraph';
import UpperGraphPart from './UpperGraphPart';
import Mathimaticsboard from './Mathimaticsboard';
import Mboard from './Mboard';
import UpperGraphPart2 from './UpperGraphPart2';
import SecondGraph from './SecondGraph';
import CrossTestBoard from './CrossTestBoard';
import Dashboardbar from './Dashboardbar';
import Dashboardbar2 from './Dashboardbar2';
import PieDash from './PieDash';

function DashboardHero() {
const [dashboardData, setDashboardData] = useState(null);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('/v2/student/dashBoardData');
      if (response.data === "Dashboard Data is Empty") {
        setDashboardData(null);
      } else {
        setDashboardData(response.data);
      }
      setDataLoaded(true);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  fetchData();
}, []);



  return (
    <>
<div className="flex justify-center mt-3 pt-8 md:pt-16 ">
  <Ebrw />
</div>

<div className="flex justify-center ">
  <Questionoboard questionData={dashboardData?.Reading_and_Writing_subscores} />
</div>

<div className="flex justify-center pt-4">
  <UpperGraphPart />
</div>


  <div className="md:pl-[148px] md:p-4 pl-[45px] p-2">
    <FirstGraph questionData={dashboardData?.Reading_and_Writing_subscores} />
  
</div>

<div className="flex justify-center mt-3 md:pt-6">
  <Mathimaticsboard />
</div>

<div className="flex justify-center">
  <Mboard questionData={dashboardData?.Math_subscores} />
</div>

<div className="flex justify-center pt-4 ">
  <UpperGraphPart2 />
</div>

<div className="">
  <div className="md:pl-[148px] md:p-4 pl-[45px] p-2">
    <SecondGraph questionData={dashboardData?.Math_subscores} />
  </div>
</div>

<div className="flex justify-center pt-4 ">
  <CrossTestBoard />

      </div>
      <div className='md:flex'>
        <div className='flex '>
        <div className=' flex md:block p-2 md:pl-[200px]'>
          <div className='p-6'>
          <Dashboardbar questionData={dashboardData?.cross_test?.science_score} />
          </div>
          <div className='mt-6 md:ml-6 '>
            <Dashboardbar2 questionData={dashboardData?.cross_test?.history_score} />
        </div>
          </div>
        </div>
        <div className='md:ml-32 '>
          <PieDash questionData={dashboardData?.cross_test} />
        </div>
      </div>
    </>
  );
}

export default DashboardHero;