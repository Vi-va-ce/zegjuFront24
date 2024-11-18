import React, { useEffect, useState } from 'react';
import pic1 from './pic1.svg';
import pic2 from './pic2.svg';
import pic3 from './pic3.svg';
import pic4 from './pic4.svg';
import pic5 from './pic5.svg';
import pic6 from './pic6.svg';
import pic7 from './pic7.svg';

function LoadingPage() {
  const [loadingStep, setLoadingStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingStep((prevStep) => (prevStep >= 7 ? 1 : prevStep + 1));
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const renderImage = (step, image) => {
    if (loadingStep === step) {
      return <img src={image} alt="Loading" className="w-[100px] h-[100px] " />;
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center justify-center h-screen">
        <div className="flex space-x-2">
          {renderImage(1, pic1)}
          {renderImage(2, pic2)}
          {renderImage(3, pic3)}
          {renderImage(4, pic4)}
          {renderImage(5, pic5)}
          {renderImage(6, pic6)}
          {renderImage(7, pic7)}
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;