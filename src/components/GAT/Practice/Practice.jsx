import React, { useEffect, useState } from 'react';
import PracticeHead from './PracticeHead';
import PracticeMain from './PracticeMain';
import PracticeQuestion from './PracticeQuestion';
import Loader from '../../../Loader';

function Practice({ data }) {
  const [subjectId, setSubjectId] = useState('');
  const [chapters, setChapters] = useState([]);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [resetKey, setResetKey] = useState(0); // Add a reset key to force re-render

  useEffect(() => {
    if (data) {
      setSubjectId(data.subjectId);
      setChapters(data.chapters);
      setIsLoading(false);
    }
  }, [data]);

  const handleChapterClick = (value) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to switch exams? Your progress will be lost."
    );

    if (userConfirmed) {
      setSelectedChapterIndex(value);
      resetState();
    }
  };

  const resetState = () => {
    // Increment the reset key to force re-render and reset state
    setResetKey((prevKey) => prevKey + 1);
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
      <PracticeHead chapters={chapters} />
      <div className='pt-[20px]'>
        <PracticeMain subjectId={subjectId} chapters={chapters} onChapterClick={handleChapterClick} />
      </div>
      <PracticeQuestion
  key={resetKey}
  subject={subjectId}
  selectedChapterIndex={selectedChapterIndex}
  chapters={chapters}
  resetTrigger={resetKey} // Pass resetKey as resetTrigger
/>
    </div>
  );
}

export default Practice;