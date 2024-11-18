import React, { useEffect, useState } from 'react';
import PracticeHead from './PracticeHead';
import PracticeMain from './PracticeMain';
import PracticeQuestion from './PracticeQuestion';
import Loader from '../../../Loader';

function ExamUAT({ data, onResult }) {
  const [subjectId, setSubjectId] = useState('');
  const [chapters, setChapters] = useState([]);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setSubjectId(data.subjectId);
      setChapters(data.chapters);
      setIsLoading(false); // Set loading to false once data is received
    }
  }, [data]);


  const handleChapterClick = (value) => {
    setSelectedChapterIndex(value);
  };

  const handleCorrectCount = (count) => {
    setCorrectCount(count);
  };

  const handleShowResultClick = () => {
    // Ensure the result data is collected correctly
    const resultData = {
      correctCount,
      subjectId,
      chapters,
    };

    // Call onResult with the collected result data
    onResult(resultData);
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
        subject={subjectId}
        selectedChapterIndex={selectedChapterIndex}
        chapters={chapters}
        onCorrectCount={handleCorrectCount}
      />
      <div className='flex justify-center mt-4'>
        <button onClick={handleShowResultClick} className='bg-zinc-300 hover-bg-zink-400  pb-3 p-4 rounded-lg'>
          Show Result
        </button>
      </div>
    </div>
  );
}

export default ExamUAT;