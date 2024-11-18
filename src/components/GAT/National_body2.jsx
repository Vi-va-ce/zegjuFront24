import React, { useState, useEffect } from 'react';
import { Math, physics, English, circle, analytical } from '../../assets';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../Loader';

function National_body2({ onSubjectClick }) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(true); // State to control the popup visibility

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get('https://zegeju-1453f.uc.r.appspot.com/api/v11/student/GetSubjectsGATFree');
        setSubjects(response.data['Subject-name']); // Use the provided array
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching subjects:', error);
        setIsLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  const handleButtonClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleContinueClick = () => {
    if (selectedSubject) {
      onSubjectClick(selectedSubject);
    } else {
      // Display a notification with sound
      const audio = new Audio('path/to/notification-sound.mp3');
      audio.play();
      alert('Please select a course first.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="h-screen relative">
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
            <p>This page is for trial purposes. More subjects and exam numbers will be available in the paid version.</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleClosePopup}
                className="bg-purple-400/50 shadow-lg rounded-[27px] px-6 py-2 hover:bg-[rgba(174,150,226,1)] hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12" id="basic">
        {subjects.map((subject, index) => {
          let imageSrc;
          // Assign specific images if available, otherwise use the Math image as default
          if (subject === 'Math') {
            imageSrc = Math;
          } else if (subject === 'VERBAL ABILITY') {
            imageSrc = English;
          } else if (subject === 'Physics') {
            imageSrc = physics;
          } else if (subject === 'ANALYTICAL ABILITY') {
            imageSrc = analytical;
          } else {
            imageSrc = Math; // Default image for any other subjects
          }

          const isSelected = selectedSubject === subject;

          return (
            <div className='pt-8 md:pt-0' key={index}>
              <button
                onClick={() => handleButtonClick(subject)}
                className={`relative ${isSelected ? 'bg-[rgba(174,150,226,1)]' : 'bg-purple-400/50'} w-[176px] md:w-[304px] h-[176px] md:h-[304px] rounded-[27px] m-2 flex flex-col items-center justify-center hover:bg-[rgba(174,150,226,1)] hover:text-white hover:text-[24px]`}
              >
                {isSelected && <img src={circle} alt="circle icon" className="absolute top-[13px] right-[10px] w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />}
                <img src={imageSrc} alt={`${subject} icon`} className="w-[100px] h-[100px] pb-2" />
                <span>{subject}</span>
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex items-left justify-end m-4 pt-8 md:pt-0">
        {selectedSubject ? (
          <Link to="/GAT/TestMode2">
            <button
              className="bg-purple-400/50 shadow-lg rounded-[27px] px-6 py-2 hover:bg-[rgba(174,150,226,1)] hover:text-white"
              onClick={handleContinueClick}
            >
              Continue
            </button>
          </Link>
        ) : (
          <button
            className="bg-purple-400/50 shadow-lg rounded-[27px] px-6 py-2 hover:bg-[rgba(174,150,226,1)] hover:text-white"
            onClick={handleContinueClick}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

export default National_body2;
