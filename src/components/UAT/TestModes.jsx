import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { backb } from '../../assets';

function TestModes({ subject, onPracticeData }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (subject) {
      axios.post('v11/student/GetQuestionUat', {
        subjectId: subject,
      })
        .then(response => {
          
          // Send the response data to App
          onPracticeData(response.data);
        })
        .catch(error => {
          console.error('There was an error sending the data!', error);
        });
    }
  }, [subject, onPracticeData]);

  const handlePracticeClick = () => {
    navigate('/UAT/TestModes/practice');
  };
const handleExamClick= () => {
  navigate('/UAT/TestMode/Exam');
};
  return (
    <div className='bg-[#ecf7f8] h-screen'>
      <button className='pl-[12px] pt-[12px] transition-transform duration-300 hover:scale-110' onClick={() => navigate('/UAT')}>
        <img src={backb} />
      </button>
      <div className='flex items-center justify-center pb-3'>
        <p className='text-[16px] md:text-[22px] font-semibold underline underline-offset-3'>Select Mode</p>
      </div>
      <div className='pb-8 md:pb-[100px] pt-6 md:pt-[100px]'>
        <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12'>
          <button className='bg-[rgba(174,150,226,1)] w-[176px] text-[22px] md:w-[304px] h-[176px] md:h-[304px] rounded-[27px] m-2 flex flex-col items-center justify-center hover:bg-[rgba(174,150,226,1)] hover:text-white hover:text-[24px]' onClick={handlePracticeClick}>
            Practice Mode
          </button>
          <button className='bg-[rgba(174,150,226,1)] w-[176px] text-[22px] md:w-[304px] h-[176px] md:h-[304px] rounded-[27px] m-2 flex flex-col items-center justify-center hover:bg-[rgba(174,150,226,1)] hover:text-white hover:text-[24px]'onClick={handleExamClick}>
            Exam Mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestModes;