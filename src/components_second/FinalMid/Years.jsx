import React, { useState } from 'react';
import { pages } from '../../assets';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Years({ exams }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleItemClick = (year) => {
    setSelectedItem(year); // Store the selected year
  };

  const sendToAPI = () => {
    if (selectedItem) {
      // Send the selected year to the API
      const payload = { year: selectedItem }; // Prepare the payload

      axios
        .post('v11/student/GetExam', payload) // Call the API
        .then((response) => {
          console.log('API response:', response.data);
          // Navigate to /ChoiceMatchShort and pass the response data if needed
          navigate('/ChoiceMatchShort', { state: { data: response.data } });
        })
        .catch((error) => {
          console.error('Error sending year to API:', error);
        });
    }
  };

  return (
    <div>
      <div className="w-[361px] md:w-[828px] h-[381px] md:h-[414px] bg-white shadow-[4px_-5px_9.34px_0px_rgba(146,146,146,0.16)] rounded-lg pt-[30px] flex flex-col items-center gap-4">
        <div className='flex items-center justify-center'>
          <p className='text-[#966DED] font-mulish text-[24px] md:text-[32px] font-semibold'>Select Exam Year</p>
        </div>
        <div className="w-full flex flex-col items-center gap-4 overflow-y-auto">
          {exams.map((exam, examIndex) => (
            <div key={examIndex} className="w-full flex flex-col items-center gap-2">
              {/* Loop through the years for each exam */}
              {exam.years.map((year, yearIndex) => (
                <button
                  key={yearIndex}
                  className={`w-[290px] h-[70px] p-4 flex items-center justify-between text-black hover:text-white ${
                    selectedItem === year ? 'bg-stone-400' : 'bg-stone-200'
                  } rounded-md hover:bg-stone-400`}
                  onClick={() => handleItemClick(year)}
                >
                  <img src={pages} className="w-[40px] h-[40px]" alt="icon" />
                  <p>{year}</p> {/* Display each year as a button */}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        className="mt-4 w-[361px] md:w-[828px] h-[50px] md:h-[64px] bg-blue-500 text-white rounded-md hover:bg-blue-700"
        onClick={sendToAPI}
        disabled={!selectedItem}
      >
        Continue
      </button>
    </div>
  );
}

export default Years;
