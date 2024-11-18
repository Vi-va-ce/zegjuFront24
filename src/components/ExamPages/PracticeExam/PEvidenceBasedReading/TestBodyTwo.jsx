import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionTwo from './QuestionTwo';
import ChoiceThree from './ChoiceThree';
import SubmitButtonTwo from './SubmitButtonTwo';
import PrevNext from './PrevNext';
import FastSurvey from "./FastSurvey"
import PracticeTestHead from './practiceTestHead';

const TestBodyTwo = ({ onMessageReceived }) => {
  const [testData, setTestData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(500); // 25 minutes in seconds
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('v2/student/getPracticeTest1');
        console.log(response)
        setTestData(response.data);
      } catch (error) {
        console.error('Error fetching practice test data:', error);
      }
    };

    fetchData();
  }, []);



  const handlePrevious = () => {
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const handleResponseData = (data) => {
    setResponseData(data);
  };

 

  return (
    <>
      <div className='test-background  ml-[10px] md:ml-[-40px] '>
        <div className='pt-[20px] md:pt[0px] ml-[2px] md:ml-[0px] '>
          {testData && <PracticeTestHead data={testData} currentIndex={currentIndex}  />}
        </div>
        <div className='flex md:flex-row'>
          <div className='hidden md:flex md:flex-row'>
            <FastSurvey responseData={responseData} />
          </div>
          <div className='ml-3.5'>
            {testData && (
              <>
                <div className='scrollable-content md:max-h-[380px] max-h-[510px]'>
                  <QuestionTwo data={testData} currentIndex={currentIndex} />
                  <ChoiceThree
                    data={testData}
                    currentIndex={currentIndex}
                    onResponseData={handleResponseData}
                    responseData={responseData}
                  />
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
                  <SubmitButtonTwo onMessageReceived={onMessageReceived} />
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