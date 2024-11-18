import React, { useState, useEffect } from 'react';
import BarC from './BarC.jsx';
import BarI from './BarI.jsx';
import BarProgress from './Progress.jsx';
import PassingProbability from './PassingProbability.jsx';
import Topscorer2 from './TopScorer2.jsx';

function FastSurvey({ responseData }) {
  const [barCData, setBarCData] = useState(0);
  const [barIData, setBarIData] = useState(0);
  const [progressData, setProgressData] = useState(0);
  const [passingProbabilityData, setPassingProbabilityData] = useState(0);

  useEffect(() => {
    if (responseData) {
      // Save responseData in local storage
      localStorage.setItem('responseData', JSON.stringify(responseData));

      const { correct, incorrect, progress, sameScoringProbability } = responseData;
      setBarCData(correct);
      setBarIData(incorrect);
      setProgressData(progress);
      setPassingProbabilityData(sameScoringProbability);
    }
  }, [responseData]);

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('responseData');
    if (storedData) {
      const { correct, incorrect, progress, sameScoringProbability } = JSON.parse(storedData);
      setBarCData(correct);
      setBarIData(incorrect);
      setProgressData(progress);
      setPassingProbabilityData(sameScoringProbability);
    }
  }, []);

  return (
    <>
      <div className="ml-36">
        <div className="fastsurvey-background rounded-t-3xl">
          <div className="p-1">
            <BarC data={barCData} />
          </div>
          <BarI data={barIData} />
          <div className="p-1">
            <BarProgress data={progressData} />
          </div>
        </div>
        <div className="w-[228px] h-[0px] shadow border-2 border-black border-opacity-30"></div>
        <div className="fastsurvey-background">
          <PassingProbability dat={passingProbabilityData} />
        </div>
        <div className="w-[228px] h-[0px] shadow border-2 border-black border-opacity-30"></div>
        <div className="fastsurvey-background rounded-b-3xl p-1">
          <Topscorer2 />
        </div>
      </div>
    </>
  );
}

export default FastSurvey;