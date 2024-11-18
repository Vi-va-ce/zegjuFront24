import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DiagnosticTestTwo from './DiagnosticTestTwo';
import TestOptionTwo from './TestOption';
import QuestionTwo from './QuestionTwo';
import ChoicesTwo from './ChoicesTwo';
import SubmitButtonTwo from './SubmitButton';
import PrevNext from './PrevNext';
import Footer2 from "../Homepage/Footer2"

const TestBodyTwo = () => {
  const [testData, setTestData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(500); // 25 minutes in seconds
  const [localStorageData, setLocalStorageData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.mockfly.dev/mocks/e98db261-d236-45c8-9334-1360b3d5dd23/api/v2/student/diagnosingTest');
        const data = response.data;
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

  const handleLocalStorageChange = (data) => {
    setLocalStorageData(data);
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  return (
  <>
    <div className='test-background  ml-[10px] md:ml-[-40px]'>
      <div className='pt-[10px] md:pt[0px] ml-[9px] md:ml-[0px] '>
        {testData && <DiagnosticTestTwo data={testData} currentIndex={currentIndex} timer={timer} />}
      </div>
      <div className='flex md:flex-row'>
        <div className='hidden md:flex md:flex-row'><TestOptionTwo /></div>
        <div className='ml-3.5'>
          {testData && (
            <>
              <div className='scrollable-content md:max-h-[380px] max-h-[510px]'>
                <QuestionTwo data={testData} currentIndex={currentIndex} />
                <ChoicesTwo data={testData} currentIndex={currentIndex} onLocalStorageChange={handleLocalStorageChange} />
              </div>

              <div className='bg-white md:w-[844px] h-[60px] mt-[-20px] w-[361px] mb-2 '>
                <PrevNext
                  currentIndex={currentIndex}
                  totalItems={testData.sections.length}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                />
              </div>
              <div className='mb-5 md:mt-0 mt-[20px] pb-[90px] md:ml-96 ml-[140px]  '>
                
                  <SubmitButtonTwo/>
                
              </div>
              
            </>
          )}
        </div>
        
      </div>
      
    </div>
   
    </>
  );
};

export default TestBodyTwo;