import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { mid, final, Continue, circle } from '../../assets';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader';

function Choice() {
  const [selectedExam, setSelectedExam] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const subject = localStorage.getItem('subjectforuni');
    if (subject) {
      setSubjectName(subject);
    }
  }, []);

  const handleExamClick = (examType) => {
    setSelectedExam(examType);
  };

  const handleFetchUniversities = async () => {
    if (!selectedExam) {
      alert('Please select an exam type.');
      return;
    }

    if (!subjectName) {
      alert('Subject not found.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('v11/student/GetUniversities', {
        examType: selectedExam,
        subject: subjectName,
      });

      if (response.data.universities && response.data.universities.length > 0) {
        navigate('/Uni', { state: { universities: response.data.universities } });
      } else {
        alert('No universities found.');
      }

    } catch (error) {
      console.error('Error fetching universities:', error);
      alert('Failed to fetch universities.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
       <Loader/>
        </div>
      ) : (
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
                      <img src={mid} alt='Midterm' />
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
                      <img src={final} alt='Final' />
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
              onClick={handleFetchUniversities}
              className={`w-[361px] md:w-[928px] h-[40px] md:h-[80px] ${selectedExam ? 'bg-[#966ded]' : 'bg-[rgba(174,150,226,0.5)]'} rounded-sm text-white text-[20px] md:text-[24px]`}
            >
              <div className='flex items-center justify-between '>
                <p className='pl-32 md:pl-[400px]'>Continue</p>
                <img src={Continue} className='pr-6' alt='Continue' />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Choice;