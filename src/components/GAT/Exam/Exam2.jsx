import React, { useEffect, useState } from 'react';
import PracticeHead from './PracticeHead';
import PracticeMain from './PracticeMain';
import PracticeQuestion from './PracticeQuestion';
import Loader from '../../../Loader';

function Exam2({ data, onResult }) {
  const [subjectId, setSubjectId] = useState('');
  const [chapters, setChapters] = useState([]);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(true); // State to control the popup visibility

  useEffect(() => {
    if (data) {
      setSubjectId(data.subjectId);
      setChapters(data.chapters);
      setIsLoading(false); // Set loading to false once data is received
    }
  }, [data]);

  useEffect(() => {
    // Show popup only once when the component mounts
    setShowPopup(true);
  }, []);

  const handleChapterClick = (value) => {
    setSelectedChapterIndex(value);
  };

  const handleCorrectCount = (count) => {
    setCorrectCount(count);
  };

  const handleShowResultClick = () => {
    const resultData = {
      correctCount,
      subjectId,
      chapters,
    };

    onResult(resultData);
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
    <div className='bg-blue-100'>
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
      <PracticeHead chapters={chapters} />
      <div className='pt-[20px]'>
        <PracticeMain subjectId={subjectId} chapters={chapters} onChapterClick={handleChapterClick} />
      </div>
      <PracticeQuestion
        subject={subjectId}
        selectedChapterIndex={selectedChapterIndex}
        chapters={chapters}
        onCorrectCount={handleCorrectCount}
      />
      <div className='flex justify-center mt-4'>
        <button onClick={handleShowResultClick} className='bg-zinc-300 hover-bg-zink-400 pb-3 p-4 rounded-lg'>
          Show Result
        </button>
      </div>
    </div>
  );
}

export default Exam2;
