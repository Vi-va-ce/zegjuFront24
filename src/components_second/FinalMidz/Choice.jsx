import React, { useState } from 'react';
import axios from 'axios';
import { mid, final, Continue, circle } from '../../assets';

function Choice() {
  const [selectedExam, setSelectedExam] = useState(null);

  const handleExamClick = (examType) => {
    setSelectedExam(examType);
  };

  const handleContinueClick = async () => {
    if (!selectedExam) {
      alert('Please select an exam type.');
      return;
    }
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('https://your-api-endpoint.com/exam-type', {
        examType: selectedExam,
      });
      console.log(selectedExam);
      console.log('API response:', response.data);
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };

  return (
    <div>
      <div className='w-[361px] md:w-[928px] h-[381px] md:h-[414px] bg-white shadow-[4px_-5px_9.34px_0px_rgba(146,146,146,0.16)] rounded-lg pt-[30px]'>
        <div className='flex items-center justify-center'>
          <p className='text-[#966DED] font-mulish text-[24px] md:text-[32px] font-semibold'>Choose Exam Type</p>
        </div>

        <div className='pt-16 md:pt-6'>
          <div className='flex items-center justify-center'>
            <button onClick={() => handleExamClick('midterm')} className='relative'>
              <div className={`w-[308px] md:w-[504px] h-[84px] md:h-[116px] ${selectedExam === 'midterm' ? 'bg-[#966ded] text-white' : 'bg-[#EEECF1] text-black'} rounded-lg text-[24px]`}>
                <div className='flex items-center justify-center gap-x-8 pt-3 md:pt-8'>
                  <img src={mid} className='' />
                  <div><p className='font-mulish'>Midterm Exam</p></div>
                </div>
                {selectedExam === 'midterm' && (
                  <div className='absolute top-4 right-4'>
                    <img src={circle} alt='Circle' />
                  </div>
                )}
              </div>
            </button>
          </div>

          <div className='flex items-center justify-center'>
            <button onClick={() => handleExamClick('final')} className='relative pt-8'>
              <div className={`w-[308px] md:w-[504px] h-[84px] md:h-[116px] ${selectedExam === 'final' ? 'bg-[#966ded] text-white' : 'bg-[#EEECF1] text-black'} rounded-lg text-[24px]`}>
                <div className='flex items-center justify-center gap-x-12 pt-3 md:pt-8'>
                  <img src={final} className='' />
                  <div><p>Final Exam</p></div>
                </div>
                {selectedExam === 'final' && (
                  <div className='absolute top-12 right-4'>
                    <img src={circle} alt='Circle' />
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between pt-8'>
        <button
          onClick={handleContinueClick}
          className={`w-[361px] md:w-[928px] h-[40px] md:h-[80px] ${selectedExam ? 'bg-[#966ded]' : 'bg-[rgba(174,150,226,0.5)]'} rounded-sm text-white text-[20px] md:text-[24px]`}
        >
          <div className='flex items-center justify-between '>
            <p className='pl-32 md:pl-[400px]'>Continue</p>
            <img src={Continue} className='pr-6' />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Choice;