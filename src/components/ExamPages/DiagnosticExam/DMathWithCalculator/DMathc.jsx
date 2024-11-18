import React, { useState } from "react";
import TestNav from "../../../TestNav";
import TestBodyTwo from "./TestBodyTwo";
import TestComplete from "../../../Messages/TestComplete";
import styles from "../../../../style";

const DMathc = () => {
  const [testComplete, setTestComplete] = useState(false);

  const onResponseSubmit = () => {
    // Handle the response submission logic here
    setTestComplete(true);
    localStorage.setItem("DMathtestComplete", "true");
    localStorage.removeItem('jsonData'); // Remove the JSON data from local storage

  };

  // Check if testComplete is already set in the localStorage
  const isTestComplete = localStorage.getItem("DMathtestComplete") === "true";


  if (isTestComplete) {
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
        <TestBodyTwo onResponseSubmit={onResponseSubmit} />
      </div>
    </div>
  );
};

export default DMathc;