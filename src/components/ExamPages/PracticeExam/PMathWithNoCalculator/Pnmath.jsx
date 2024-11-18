import React, { useState, useEffect } from 'react';
import TestNav from '../../../TestNav';
import TestBodyTwo from './TestBodyTwo';
import TestComplete from "../../../Messages/TestComplete";
import styles from '../../../../style';
const Pnmath = () => {
  const [testComplete, setTestComplete] = useState(false);

  const onMessageReceived = () => {
    // Handle the message received logic here
    setTestComplete(true);
    localStorage.setItem("PnMathtestComplete", "true");
  
    // Delete keys starting with "ch" from localStorage
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith("ch")) {
        localStorage.removeItem(key);
      }
    });
  };

  // Check if testComplete is already set in the localStorage
  const isTestComplete = localStorage.getItem("PnMathtestComplete") === "true";

  if (isTestComplete){
    return (
      <div className="unscroll">
        <div className={`gradient-backgroundtwo`}>
          <div className={`mr-36`}>
            <div className="">
              <TestNav />
            </div>
          </div>
        </div>
        <div className="test-background">
          <TestComplete />
        </div>
      </div>
    );
  }

  return (
    <div>
    <div className={`${styles.paddingX} gradient-background`}>
    <div className={`${styles.boxWidth}`}>
      <div className="pt-4 md:pt-2">
        <TestNav/>
      </div>
    </div>
  </div>
      <div className="test-background">
        <TestBodyTwo onMessageReceived={onMessageReceived} />
      </div>
    </div>
  );
};

export default Pnmath;