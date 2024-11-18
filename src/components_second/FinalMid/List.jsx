import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Continue, circle2 } from '../../assets';

function List({ universities }) {
  const [clickedUniversity, setClickedUniversity] = useState('');
  const [showCircle, setShowCircle] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleUniversityClick = (university) => {
    setClickedUniversity(university);
    setShowCircle(true);
  };

  const handleContinueClick = () => {
    if (clickedUniversity) {
      const payload = { university: clickedUniversity };
      setIsLoading(true); // Set loading to true when API call starts

      axios
        .post('v11/student/GetExamIds', payload)
        .then((response) => {
          // Redirect to /exampage on successful response
          navigate('/Examchoice', { state: { data: response.data } }); // Pass response data to /exampage if needed
        })
        .catch((error) => {
          console.error('Error sending university:', error);
        })
        .finally(() => {
          setIsLoading(false); // Set loading to false once the API call is complete
        });
      setShowCircle(false);
    }
  };

  return (
    <div>
      <div className="w-[361px] md:w-[760px] md:h-[70px] h-[41px] bg-[#ae96e2] rounded-sm">
        <p className="text-white text-[20px] md:text-[32px] font-semibold pl-2 pt-1">
          Select University
        </p>
      </div>

      <div className="h-[320px] overflow-y-scroll">
        {universities.map((university, index) => (
          <div key={index} className="relative">
            <button
              className={`mt-2 w-[361px] md:w-[760px] h-[26.6px] md:h-[56px] rounded-sm text-black md:text-[24px] ${
                clickedUniversity === university
                  ? 'bg-[rgba(174,150,226,0.18)]'
                  : 'bg-white hover:bg-[rgba(174,150,226,0.18)]'
              }`}
              onClick={() => handleUniversityClick(university)}
            >
              <div className="flex items-center justify-between">
                <p className="pl-4">{university}</p>
                {showCircle && clickedUniversity === university && (
                  <img src={circle2} className="pr-2 md:w-12 w-8 md:h-12 w-8" alt="Circle" />
                )}
              </div>
            </button>
          </div>
        ))}
      </div>

      <button
        className={`w-[361px] md:w-[760px] md:h-[70px] h-[40px] mt-4 ${
          clickedUniversity ? 'bg-[#966ded]' : 'bg-[rgba(174,150,226,0.5)] hover:bg-[rgba(174,150,226,0.7)]'
        } rounded-sm text-white text-[20px] md:text-[24px]`}
        onClick={handleContinueClick}
        disabled={isLoading} // Disable the button while loading
      >
        <div className="flex items-center justify-between">
          {isLoading ? (
            <p className="pl-32 md:pl-[350px]">Loading...</p> // Show loading text
          ) : (
            <>
              <p className="pl-32 md:pl-[350px]">Continue</p>
              <img src={Continue} className="pr-6" alt="Continue" />
            </>
          )}
        </div>
      </button>
    </div>
  );
}

export default List;
