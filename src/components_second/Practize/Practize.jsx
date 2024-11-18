import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PracticeHead from './PracticeHead';
import PracticeMain from './PracticeMain';
import PracticeQuestion from './PracticeQuestion';

function Practize({ subjectName }) {
  const [subjectId, setSubjectId] = useState('');
  const [chapters, setChapters] = useState([]);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post('v10/student/GetQuestionFree', {
        subjectId: subjectName,
      });
      setSubjectId(subjectId);
      setChapters(response.data.chapters);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChapterClick = (value) => {
    setSelectedChapterIndex(value); // Update the selected chapter index in the state
  };

  return (
    <div className='bg-blue-100'>
      <PracticeHead chapters={chapters} /> {/* Pass the chapters data */}
      <div className='pt-[20px]'>
        <PracticeMain subjectId={subjectId} chapters={chapters} onChapterClick={handleChapterClick} /> {/* Pass the handleChapterClick callback */}
      </div>
      <PracticeQuestion subject={subjectId} selectedChapterIndex={selectedChapterIndex} chapters={chapters} /> {/* Pass the selected chapter index as a prop */}
    </div>
  );
}

export default Practize;
