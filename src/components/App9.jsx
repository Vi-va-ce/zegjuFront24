import React, { useState, useEffect } from 'react';
import styles from './style';
import TestNav from './components/TestNav';
import PracticeTest from './components/PracticeTest';
import LoadingPage from './components/LoadingPage/LoadingPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call by adding a delay
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(delay);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="unscroll">
      <div className={`gradient-backgroundtwo`}>
        <div className={``}>
          <div className="">
            <TestNav />
          </div>
        </div>
      </div>
      <div className="test-background h-full">
        <div className={`mr-36 ml-[25px]`}>
          <div className="">
            <PracticeTest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;