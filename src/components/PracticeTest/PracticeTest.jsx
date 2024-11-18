import React, { useEffect, useState } from 'react';
import QuestionTwo from './QuestionTwo';
import ChoicesThree from './ChoicesThree';
import SubmitButtonTwo from './SubmitButton';
import PrevNext from './PrevNext';
import FastSurvey from "./FastSurvey"
import PracticeTestHead from './practiceTestHead';


const TestBodyTwo = () => {
  const [testData, setTestData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(500); // 25 minutes in seconds

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.mockfly.dev/mocks/e98db261-d236-45c8-9334-1360b3d5dd23/api/v2/student/diagnosingTest');
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
    <>
    <div className='test-background'>
      <div className='md:ml-32'>
        {testData && <PracticeTestHead data={testData} currentIndex={currentIndex} timer={timer} />}
      </div>
      <div className='flex md:flex-row'>
        <div className='hidden md:flex md:flex-row pt-2'><FastSurvey/></div>
        <div className='md:ml-3.5'>
          {testData && (
            <>
              <div className='scrollable-content md:max-h-[380px] max-h-[510px]'>
                <QuestionTwo data={testData} currentIndex={currentIndex} />
                <ChoicesThree data={testData} currentIndex={currentIndex} />
              </div>

              <div className='bg-whie'>
              <PrevNext
              currentIndex={currentIndex}
              totalItems={testData && testData.sections.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
              </div>
              <div className='mb-5 md:mt-[30px] mt-[20px]  md:ml-96 ml-[140px]'>
                <SubmitButtonTwo />
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