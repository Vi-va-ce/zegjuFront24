import React, { useEffect, useState } from 'react';
import DiagnosticTestHead from './DiagnosticTestHead';
import TestOption1 from './Testoption1';
import Question from './Question';
import Choices from './Choices';
import SubmitButton from "./DiagnosticTest,Evidencebased/SubmitButton";
import PrevNext from './PrevNext';

const TestBody = () => {
  const [testData, setTestData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(500); // 25 minutes in seconds

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://4wmw2.wiremockapi.cloud/api/v2/student/diagnosticTest');
        const data = await response.json();
        setTestData(data);
      } catch (error) {
        console.error('Error fetching diagnostic test data:', error);
      }
    };

    fetchData();
  }, []);

  
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    // Clear interval when timer reaches 0
    if (timer === 0) {
      clearInterval(countdown);
    }

    // Clean up interval on component unmount
    return () => {
      clearInterval(countdown);
    };
  }, [timer]);

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div className='test-background'>
      <div>
        {testData && <DiagnosticTestHead data={testData} currentIndex={currentIndex} timer={timer} />}
      </div>
      <div className='flex md:flex-row'>
        <div className='hidden md:flex md:flex-row'><TestOption1 /></div>
        <div className='ml-3.5'>
          {testData && <Question data={testData} currentIndex={currentIndex} />}
          {testData && <Choices data={testData} currentIndex={currentIndex} />}
          <div className=''>
            <PrevNext
              currentIndex={currentIndex}
              totalItems={testData && testData.sections.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </div>
          <div className='mb-5 mt-4 ml-96 '>
            <SubmitButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestBody;