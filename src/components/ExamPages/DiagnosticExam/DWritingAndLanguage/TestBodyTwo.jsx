import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DiagnosticTestTwo from './DiagnosticTestTwo';
import TestOptionTwo from './TestOption';
import QuestionTwo from './QuestionTwo';
import ChoicesTwo from './ChoicesTwo';
import SubmitButtonTwo from './SubmitButtonTwo';
import PrevNext from './PrevNext';
import Footer2 from "../../../Footer/Footer2";

const TestBodyTwo = ({ onResponseSubmit }) => {
  const [testData, setTestData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(2340); // Initialize with 0
  const [localStorageData, setLocalStorageData] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');
  const [notificationDisplayed, setNotificationDisplayed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('v9/student/diagnosticTestt');
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
      setTimer((prevTimer) => {
        const newTimer = prevTimer - 1;
        localStorage.setItem('timer', newTimer.toString()); // Store the updated timer value in localStorage
        return newTimer;
      });
    }, 1000);

    // Show notification when two minutes are remaining
    if (timer === 120 && !notificationDisplayed) {
      displayNotification('Only two minutes left');
      setNotificationDisplayed(true);
    }

    // Clear interval when timer reaches 0
    if (timer === 0) {
      clearInterval(countdown);
      setSubmitMessage('Time is up. Submitting...');
      onResponseSubmit('Time is up. Submitting...');
      localStorage.removeItem('timer');  // Pass the submit message to the parent component
    }

    // Clean up interval on component unmount
    return () => {
      clearInterval(countdown);
    };
  }, [timer, notificationDisplayed, onResponseSubmit]);

  useEffect(() => {
    const storedTimer = localStorage.getItem('timer');
    if (storedTimer) {
      const parsedTimer = parseInt(storedTimer, 10);
      setTimer(parsedTimer);
    }
  }, []);

  const displayNotification = (message) => {
    window.alert(message);
  };

  const handleLocalStorageChange = (data) => {
    setLocalStorageData(data);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleResponseSubmit = () => {
    setSubmitMessage('Response Submitted');
    onResponseSubmit('Response Submitted'); // Pass the submit message to the parent component
  
    localStorage.removeItem('timer'); // Delete the timer from local storage
  };

  return (
    <>
      <div className='test-background  ml-[10px] md:ml-[-40px]'>
        <div className='pt-[20px] md:pt[0px] ml-[2px] md:ml-[0px] '>
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

                <div className=''>
                  <PrevNext
                    currentIndex={currentIndex}
                    totalItems={testData.sections.length}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                  />
                </div>
                <div className='mb-5 md:mt-8 mt-[20px] pb-[90px] md:ml-96 ml-[140px]  '>
                  <SubmitButtonTwo message={submitMessage} onResponseSubmit={handleResponseSubmit} /> {/* Pass the submit message and callback function as props */}
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